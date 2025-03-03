"use client"
import { useAppKitWallet } from '@reown/appkit-wallet-button/react'
import { Button } from "@/components/ui/button"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { Wallet } from 'lucide-react'
import { cutString } from '@/lib/utils'

export default function ConnectButtonSmall() {
  const { isReady } = useAppKitWallet()
  const { isConnected, address } = useAppKitAccount()
  const { open } = useAppKit()
  return (
    <div>
      {
        isReady ? (
          <>
            {
              isConnected && address ? (
                <Button size={"sm"} variant={'primary'} onClick={() => open()}>
                  {cutString(address, 5)}
                </Button>
              ) : (
                <Button size={'icon'} onClick={() => open()}>
                  <Wallet />
                </Button>
              )
            }
          </>
        ) : (
          <Button size={'icon'} disabled>
            <Wallet />
          </Button>
        )
      }
    </div>
  )
}