'use client'
import { Button } from '@/components/ui/button'
import {
  doClaimReward,
  requestSporeBalance,
  useClaimReward,
  useCurrentEpoch,
  useSporeBalance,
  useSporeUser,
  useTimeShare
} from '@/hooks/useSporeContract'
import { createScanUrlGNosis, NumberComma } from '@/lib/utils'
import { useAppKitAccount } from '@reown/appkit/react'
import { useQueryClient } from '@tanstack/react-query'
import { RefreshCcw } from 'lucide-react'
import { useState } from 'react'
import { FaGift, FaUserFriends } from 'react-icons/fa'
import { FaCoins, FaRegShareFromSquare } from "react-icons/fa6"
import { MdAccessTime } from "react-icons/md"
import { VscRefresh } from 'react-icons/vsc'
import { toast } from 'sonner'
import SporeCard from './spore-card'
const SporeSection = () => {
  const [isRequestBalance, setIsRequestBalance] = useState(false)
  const [isClaiming, setIsClaiming] = useState(false)
  const queryClient = useQueryClient();
  const { address } = useAppKitAccount()
  const { data: users } = useSporeUser()
  const { data: balances } = useSporeBalance(address!)
  const { data: claims } = useClaimReward(address)
  const { data: timeshare } = useTimeShare(address!)
  const { data: currentEpoch } = useCurrentEpoch()
  function handleScanTxn(txn: string) {
    window.open(createScanUrlGNosis({ type: 'tx', hash: txn }), '_blank')
  }
  async function doRequestBalance() {
    setIsRequestBalance(true)
    const tx = await requestSporeBalance(queryClient)
    if (tx?.hash) {
      toast.success('Sucess!', {
        action: {
          label: 'Scan TXN',
          onClick: () => handleScanTxn(tx.hash)
        },
        description: "Balance request successful, if your balance has not increased, please wait a few moments or click reload balance",
      })
    }
    setIsRequestBalance(false)
  }
  async function fNClaimReward() {
    setIsClaiming(true)
    const tx = await doClaimReward(queryClient, {
      address_wallet: address!,
      reservedAmount: claims?.reservedAmount,
      withdrawnAmount: claims?.withdrawnAmount
    })
    if (tx?.hash) {
      toast.success('Sucess!', {
        action: {
          label: 'Scan TXN',
          onClick: () => handleScanTxn(tx.hash)
        },
        description: "Success Cliam Reward",
      })
    }
    setIsClaiming(false)
  }
  return (
    <section>
      <div className="container">
        <div>
          <p>Spore Balance:</p>
          <div className='flex flex-col gap-3 md:flex-row justify-between'>
            <div className='flex items-center gap-2'>
              <h2 className='text-[32px] font-bold text-[#27CC99]'>
                {balances?.toString()}
              </h2>
              <Button variant={"primary-outline"} size={"icon-sm"}>
                <VscRefresh />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button disabled={isRequestBalance} onClick={doRequestBalance}>
                {isRequestBalance && <RefreshCcw className='animate-spin' />}
                Request Token
              </Button>
              <Button disabled={isClaiming} onClick={fNClaimReward} variant={"primary-outline"}>
                {isClaiming && <RefreshCcw className='animate-spin' />}
                Claim Reward
              </Button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 my-[30px] gap-3 md:gap-4'>
          <SporeCard label='Total User' value={users} icon={<FaUserFriends className="w-7 h-7" />} />
          <SporeCard isActive={currentEpoch?.isActive} label='Epoch' value={currentEpoch?.currentEpochNumber} icon={<MdAccessTime className="w-7 h-7" />} />
          <SporeCard label='Timeshare' value={NumberComma(timeshare)} icon={<FaRegShareFromSquare className="w-7 h-7" />} />
          <SporeCard label='Recent Claim' value={claims?.withdrawnAmount} icon={<FaCoins className="w-7 h-7" />} />
          <SporeCard label='Claimable Reward' value={claims?.reservedAmount} icon={<FaGift className="w-7 h-7" />} />
        </div>
      </div>
    </section>
  )
}

export default SporeSection