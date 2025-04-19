import AssetList from '@/components/home/assets'
import BannerSection from '@/components/home/banner/banner-section'
import ChainSection from '@/components/home/chains'
import StatsSection from '@/components/home/charts/stats-section'
// import RewardHistory from '@/components/home/reward-history'
import HeroSection from '@/components/home/hero/hero-section'
import JoinComunity from '@/components/home/joincomunity'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <BannerSection />
      <StatsSection />
      <ChainSection />
      <section className='bg-gradient-to-tr space-y-4 md:space-y-12 from-[#00140F] via-[#27CC99]/10 to-[#00140F] py-6 md:py-12'>
        <AssetList />
        {/* <RewardHistory /> */}
        <JoinComunity />
      </section>
    </div>
  )
}