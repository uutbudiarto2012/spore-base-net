"use client"
import { useAppKitAccount } from '@reown/appkit/react'
import React from 'react'
import DisconnectedWallet from './disconnected-wallet'
type DashboardContainerProps = {
  children: React.ReactNode
}
function DashboardContainer({ children }: DashboardContainerProps) {
  const { isConnected } = useAppKitAccount()
  return (
    <div className='space-y-6 md:space-y-12 py-6 md:py-12 bg-gradient-to-br from-[#00140F] via-white/10 to-[#00140F]'>

      {
        isConnected ? (
          <>{children}</>
        ) : <DisconnectedWallet />
      }
    </div>
  )
}

export default DashboardContainer