import DashboardContainer from '@/components/dashboard/dashboard-container'
import SporeSection from '@/components/dashboard/sporesections'
import Transactions from '@/components/dashboard/transactions'
import React from 'react'

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <SporeSection />
      <Transactions />
    </DashboardContainer>
  )
}
