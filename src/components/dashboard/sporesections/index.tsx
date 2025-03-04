'use client'
import { Button } from '@/components/ui/button'
import { FaGift, FaUserFriends } from 'react-icons/fa'
import { FaCoins, FaRegShareFromSquare } from "react-icons/fa6"
import { MdAccessTime } from "react-icons/md"
import { VscRefresh } from 'react-icons/vsc'
import SporeCard from './spore-card'
import { useClaimReward, useSporeBalance, useSporeUser, useTimeShare } from '@/hooks/useSporeContract'
import { useAppKitAccount } from '@reown/appkit/react'
import { NumberComma } from '@/lib/utils'
const SporeSection = () => {
  const { address} = useAppKitAccount()
  const { data: users } = useSporeUser()
  const { data: balances } = useSporeBalance(address!)
  const { data: claims } = useClaimReward(address)
  const { data: timeshare } = useTimeShare(address!)
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
              <Button>Request Token</Button>
              <Button variant={"primary-outline"}>Claim Reward</Button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 my-[30px] gap-3 md:gap-4'>
          <SporeCard label='Total User' value={users} icon={<FaUserFriends className="w-7 h-7" />} />
          <SporeCard label='Epoch' value={1} icon={<MdAccessTime className="w-7 h-7" />} />
          <SporeCard label='Timeshare' value={NumberComma(timeshare)} icon={<FaRegShareFromSquare className="w-7 h-7" />} />
          <SporeCard label='Recent Claim' value={claims?.withdrawnAmount} icon={<FaCoins className="w-7 h-7" />} />
          <SporeCard label='Claimable Reward' value={claims?.reservedAmount} icon={<FaGift className="w-7 h-7" />} />
        </div>
      </div>
    </section>
  )
}

export default SporeSection