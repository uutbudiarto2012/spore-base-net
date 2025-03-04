import { Button } from '@/components/ui/button'
import { FaGift, FaUserFriends } from 'react-icons/fa'
import { FaCoins, FaRegShareFromSquare } from "react-icons/fa6"
import { MdAccessTime } from "react-icons/md"
import { VscRefresh } from 'react-icons/vsc'
import SporeCard from './spore-card'
const SporeSection = () => {
  return (
    <section>
      <div className="container">
        <div>
          <p>Spore Balance:</p>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <h2 className='text-[32px] font-bold text-[#27CC99]'>12,560</h2>
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
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-[30px] gap-3 md:gap-4'>
          <SporeCard label='Total User' value={20} icon={<FaUserFriends className="w-7 h-7" />} />
          <SporeCard label='Epoch' value={20} icon={<MdAccessTime className="w-7 h-7" />} />
          <SporeCard label='Timeshare' value={20} icon={<FaRegShareFromSquare className="w-7 h-7" />} />
          <SporeCard label='Recent Claim' value={20} icon={<FaCoins className="w-7 h-7" />} />
          <SporeCard label='Claimable Reward' value={20} icon={<FaGift className="w-7 h-7" />} />
        </div>
      </div>
    </section>
  )
}

export default SporeSection