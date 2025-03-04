import sc from '@/json/abi.json'
import Web3Client from "@/config/web3Client";
import { useQuery } from "@tanstack/react-query"
import { bigNumberToNumber, convertToSporeNumber } from '@/lib/utils';
import { axiosClient } from '@/lib/axiosclient';


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

async function getClaimedReward(address?: string): Promise<{ reservedAmount: string, withdrawnAmount:string } | null | undefined> {
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

async function getTimeShare(address:string) {
  const response = await axiosClient({
    method: 'GET',
    url: `timeshare/${address}`
  })
  return response.data?.data?.pointTimeshare || 0
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

export { useSporeUser, useSporeBalance, useClaimReward, useTimeShare }