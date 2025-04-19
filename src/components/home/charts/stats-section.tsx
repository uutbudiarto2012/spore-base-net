'use client'
import { useAumProgress } from '@/hooks/useSporeStats'
import AssetDistribution from './asset-distribution'
import Portfolio from './portfolio'
import ProgressAum from './progress-aum'
import Image from 'next/image'

export default function StatsSection() {
  const { data: aumProgress } = useAumProgress()
  return (
    <section className='py-6 md:py-0 bg-[#00140F] relative md:aspect-[1000/570] flex items-center'>
      <div className="absolute z-10 top-0 right-0 bottom-0 left-0">
        <Image fill alt="chart bg" src={`/images/bg-chart.png`} className='w-full h-full object-cover' />
      </div>
      <div className="container space-y-4 md:space-y-6 relative z-10">
        <div className='p-4 md:p-6 border rounded-xl border-[#D6F8DD]/80'>
          <div className='mb-3 flex items-center gap-2'>
            <div className='text-[#27CC99] uppercase text-lg font-semibold'>TARGET</div>
            <div className='py-1 px-2 border border-white/50 font-semibold text-sm rounded-lg'>AUM (kUSD)</div>
          </div>
          {
            aumProgress && <ProgressAum target={5000} actual={aumProgress / 1000} />
          }
        </div>
        <div className="grid md:grid-cols-4 aspect-[12/4] gap-4 md:gap-6">
          <div className='p-4 border rounded-xl border-[#D6F8DD]/80'>
            <div className='mb-3'>
              <div className='text-[#27CC99] uppercase text-lg font-semibold text-center'>Asset Distribution</div>
            </div>
            <AssetDistribution />
          </div>
          <div className="md:col-span-3 p-4 border rounded-xl border-[#D6F8DD]/80">
            <Portfolio />
          </div>
        </div>
      </div>
    </section>
  )
}
