import SporeSection from '@/components/dashboard/sporesections'
import Transactions from '@/components/dashboard/transactions'
import React from 'react'

export default function DashboardPage() {
  return (
    <div className='space-y-6 md:space-y-12 py-6 md:py-12 bg-gradient-to-br from-[#00140F] via-white/10 to-[#00140F]'>
      <SporeSection />
      <Transactions />
    </div>
  )
}
