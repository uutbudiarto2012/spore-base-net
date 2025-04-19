import AssetList from '@/components/home/assets'
import BannerSection from '@/components/home/banner/banner-section'
import ChainSection from '@/components/home/chains'
import StatsSection from '@/components/home/charts/stats-section'
// import RewardHistory from '@/components/home/reward-history'
import HeroSection from '@/components/home/hero/hero-section'
import JoinComunity from '@/components/home/joincomunity'
import Head from 'next/head'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spore-app.vercel.app';

export async function generateMetadata() {
  return {
    title: "SporeVC - DEGENS In Control",
    description: "The Trading Fees Go back to The Trenches. Other launchpads extract millions. Flaunch sends it all back",
    authors: [{ name: 'Spore Team', url: siteUrl }],
    openGraph: {
      type: 'website',
      url: siteUrl,
      title: 'SporeVC - DEGENS In Control',
      description: 'The Trading Fees Go back to The Trenches. Other launchpads extract millions. Flaunch sends it all back',
      siteName: 'SporeVC',
      locale: 'en_US',
      images: [
        {
          url: `${siteUrl}/images/sporevc.png`,
          width: 512,
          height: 512,
          alt: 'SporeVC Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SporeVC - DEGENS In Control',
      description: 'The Trading Fees Go back to The Trenches. Other launchpads extract millions. Flaunch sends it all back',
      images: [`${siteUrl}/images/sporevc.png`],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Menyisipkan JSON-LD menggunakan JSON.stringify untuk validitas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization", // Jika SporeVC adalah organisasi
              name: "SporeVC",
              url: siteUrl,
              sameAs: [],
              description: "The Trading Fees Go back to The Trenches. Other launchpads extract millions. Flaunch sends it all back",
            }),
          }}
        />
      </Head>

      <HeroSection />
      <BannerSection />
      <StatsSection />
      <ChainSection />

      <section className="bg-gradient-to-tr space-y-4 md:space-y-12 from-[#00140F] via-[#27CC99]/10 to-[#00140F] py-6 md:py-12">
        <AssetList />
        {/* <RewardHistory /> */}
        <JoinComunity />
      </section>
    </>
  )
}
