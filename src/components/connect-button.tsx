"use client"
import { useAppKitWallet } from '@reown/appkit-wallet-button/react'
import { Button } from "@/components/ui/button"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { Wallet } from 'lucide-react'

export default function ConnectButton() {
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
                <div className='border dark:bg-primary p-0 bg-primary-foreground rounded-full'>
                  <w3m-button size='md' balance='hide' />
                </div>
              ) : (
                <Button className='rounded-full' onClick={() => open()}>
                    <Wallet />
                    Connect
                </Button>
              )
            }
          </>
        ) : (
          <Button className='rounded-full' disabled>
            <Wallet />
            Loading...
          </Button>
        )
      }
    </div>
  )
}