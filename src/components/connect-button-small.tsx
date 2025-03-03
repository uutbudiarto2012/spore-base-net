"use client"
import { useAppKitWallet } from '@reown/appkit-wallet-button/react'
import { Button } from "@/components/ui/button"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { Wallet } from 'lucide-react'

export default function ConnectButtonSmall() {
  const { isReady } = useAppKitWallet()
  const { isConnected } = useAppKitAccount()
  const { open } = useAppKit()
  return (
    <div>
      {
        isReady ? (
          <>
            {
              isConnected ? (
                <div className='border dark:bg-primary h-10 flex items-center bg-primary-foreground rounded-full'>
                  <w3m-button  balance='show' />
                </div>
              ) : (
                <Button size={'icon'} className='rounded-full' onClick={() => open()}>
                  <Wallet />
                </Button>
              )
            }
          </>
        ) : (
          <Button className='rounded-full' size={'icon'} disabled>
            <Wallet />
          </Button>
        )
      }
    </div>
  )
}