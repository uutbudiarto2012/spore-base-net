import AssetList from '@/components/home/assets'
import ChainSection from '@/components/home/chains'
import AssetDistribution from '@/components/home/charts/asset-distribution'
import Portfolio from '@/components/home/charts/portfolio'
import HeroSection from '@/components/home/hero/hero-section'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <section className='bg-[#00140F]'>
        <div className='w-full aspect-[12/4] relative'>
          <Image className='w-full h-full z-0' fill src={'/images/banner.png'} alt='banner' />
          <div className='absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-tr from-black/20 to-transparent z-10'></div>
        </div>
      </section>
      <section className='py-6 md:py-12 bg-[#00140F]'>
        <div className="container grid md:grid-cols-4 aspect-[12/4] gap-4">
          <div className='p-4 border rounded-xl border-[#D6F8DD]/80'>
            <div className='mb-3'>
              <div className='text-[#D6F8DD] text-lg font-semibold text-center'>Asset Distribution</div>
            </div>
            <AssetDistribution />
          </div>
          <div className="md:col-span-3 p-4 border rounded-xl border-[#D6F8DD]/80">
            <div className='flex mb-3'>
              <div className='flex gap-2'>
                <div className='text-[#D6F8DD] text-lg font-semibold text-center'>Matrix Monthly</div>
                <div className='border bg-[#D6F8DD] rounded-lg'>
                  <input className='p-1 bg-transparent text-black' type="month" />
                </div>
              </div>
            </div>
            <Portfolio />
          </div>
        </div>
      </section>
      <ChainSection />
      <section className='bg-[#00140F] py-6 md:py-12'>
        <div className="container">
          <AssetList />
        </div>
      </section>
    </div>
  )
}