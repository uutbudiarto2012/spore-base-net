import Web3Client from "@/config/web3Client";
import sc from '@/json/abi.json';
import { axiosClient } from '@/lib/axiosclient';
import { bigNumberToInt, bigNumberToNumber, convertToSporeNumber } from '@/lib/utils';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ethers } from 'ethers';
import { toast } from "sonner";
import { getClaimHistory } from "./useSporeToken";
type TEpochDataResponse = {
  startTime: number
  endTime: number
  totalUsers: string
  totalReserved: string
  currentEpochNumber: string
  isActive: boolean
}
type TFormClaim = {
  address_wallet: string,
  reservedAmount?: string,
  withdrawnAmount?: string,
}
async function getCurrentEpoch(): Promise<TEpochDataResponse | undefined> {
  try {
    const contractTask = new Web3Client.eth.Contract(sc.ClaimABI, sc.ClaimContract);
    const currentEpoch = await contractTask.methods.currentEpoch().call();
    const currentEpochNumber = bigNumberToNumber(`${currentEpoch}`)
    const currentEpochData = await contractTask.methods.getEpochData(currentEpochNumber).call();
    const isActive = await contractTask.methods.isEpochActive().call() as boolean
    const currentEpochX = currentEpochData as any

    return {
      startTime: bigNumberToInt(`${currentEpochX.startTime}`) * 1000,
      endTime: bigNumberToInt(`${currentEpochX.endTime}`) * 1000,
      totalUsers: bigNumberToNumber(`${currentEpochX.totalUsers}`),
      totalReserved: bigNumberToNumber(`${currentEpochX.totalReserved}`),
      currentEpochNumber,
      isActive
    }

  } catch (error: any) {
    console.error({ error: error.message })
  }
}

async function getUser() {
  try {
    const contractTask = new Web3Client.eth.Contract(sc.FaucetABI, sc.FaucetContract);
    const showTotalUser = await contractTask.methods.getTotalTokenReceivers(sc.SporeContract).call();
    return bigNumberToNumber(`${showTotalUser}`)
  } catch (error) {
    console.log(error)
  }
}
async function getTokenBalance(address: string) {
  try {
    const contractTask = new Web3Client.eth.Contract(sc.ClaimABI, sc.ClaimContract);
    const sporeBalance = await contractTask.methods.getTokenBalance(sc.SporeContract, address).call();
    return convertToSporeNumber(`${sporeBalance}`)
  } catch (error) {
    console.error(error)
  }
}

async function getClaimedReward(address?: string): Promise<{ reservedAmount: string, withdrawnAmount: string } | null | undefined> {
  try {
    if (!address) {
      console.error('Address is required to get the claimed reward.');
      return null;
    }
    const contractTask = new Web3Client.eth.Contract(sc.ClaimABI, sc.ClaimContract);
    const showClaimedReward = await contractTask.methods.funderProperties(address).call();
    const responseX = showClaimedReward as any
    return {
      reservedAmount: convertToSporeNumber(`${responseX?.reservedAmount || 0}`),
      withdrawnAmount: convertToSporeNumber(`${responseX?.withdrawnAmount || 0}`),
    }

  } catch (error: any) {
    console.error({ error: error.message })
  }
}

async function getTimeShare(address: string) {
  const response = await axiosClient({
    method: 'GET',
    url: `timeshare/${address}`
  })
  return response.data?.data?.pointTimeshare || 0
}

async function createHistoryClaim(formData: any) {
  await axiosClient({
    method: 'POST',
    url: 'history-cliam',
    data: formData
  })
}

async function requestSporeBalance(queryClient: ReturnType<typeof useQueryClient>) {
  if (typeof window === 'undefined') {
    return;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum!);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    sc.FaucetContract,
    sc.FaucetABI,
    signer
  );
  try {
    const tx = await contract.RequestSpore(sc.SporeContract, 1000000)
    await tx.wait();
    queryClient.invalidateQueries({ queryKey: ["get-contract-spore-balance"] });
    return tx
  } catch (error: any) {
    toast.error('Ups!', {
      description: 'Request exceeds the specified limit, Request only 1 time in 4 hours'
    })
    console.error({ error: error.message })
  }

}
async function doClaimReward(queryClient: ReturnType<typeof useQueryClient>, data: TFormClaim) {
  if (typeof window === 'undefined') {
    return;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum!);
  try {
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      sc.ClaimContract,
      sc.ClaimABI,
      signer
    );

    const tx = await contract.claimRewards({
      from: data.address_wallet,
      value: ethers.utils.parseEther("0")
    });
    const response = await tx.wait();
    let formData
    if (data.reservedAmount && data.withdrawnAmount) {
      formData = {
        address_wallet: data.address_wallet,
        txn: response.transactionHash as string,
        claim: parseFloat(data.reservedAmount.replace(/,/g, "")),
        total_claim: parseFloat(data.reservedAmount.replace(/,/g, "")) + parseFloat(data.withdrawnAmount.replace(/,/g, ""))
      }
      
    }
    await createHistoryClaim(formData)
    await tx.wait();
    queryClient.invalidateQueries({ queryKey: ["get-contract-claim"] });
    getClaimHistory({address:data.address_wallet})
    return tx
  } catch (error: any) {
    toast.error(error.code, {
      description: error.reason + '\n maybe You don\'t have reward to claim'
    })
    console.error(error)
  }
}
const useSporeUser = () => {
  return useQuery({
    queryKey: ['get-contract-total-user'],
    queryFn: () => getUser(),
  })
}
const useSporeBalance = (address: string) => {
  return useQuery({
    queryKey: ['get-contract-spore-balance', address],
    queryFn: () => getTokenBalance(address),
  })
}
const useClaimReward = (address?: string) => {
  return useQuery({
    queryKey: ['get-contract-claim', address],
    queryFn: () => getClaimedReward(address),
  })
}
const useTimeShare = (address: string) => {
  return useQuery({
    queryKey: ['get-timeshare', address],
    queryFn: () => getTimeShare(address),
  })
}
const useCurrentEpoch = () => {
  return useQuery({
    queryKey: ['get-current-epoch'],
    queryFn: () => getCurrentEpoch(),
  })
}

export {
  requestSporeBalance,
  useClaimReward,
  useCurrentEpoch,
  useSporeBalance,
  useSporeUser,
  useTimeShare,
  doClaimReward
};

