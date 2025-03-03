import AssetList from '@/components/home/assets'
import { AssetDistribution } from '@/components/home/charts/asset-distribution'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <section className='py-6 md:py-12'>
        <div className="container grid md:grid-cols-3 gap-4">
          <AssetDistribution />
          <div className='md:col-span-2'>MATRIX</div>
        </div>
      </section>
      <section>
        <div className="container">
          <AssetList />
        </div>
      </section>
    </div>
  )
}