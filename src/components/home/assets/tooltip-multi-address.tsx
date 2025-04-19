'use client'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cutString, toLinkRef } from '@/lib/utils'
import copy from 'copy-to-clipboard'
import { Copy, Eye } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

export default function TooltipMultiAddress({ wallets, link_ref }: { wallets: string[], link_ref: string }) {
  function handleCopy(address: string) {
    const success = copy(address)
    if (success) {
      toast.success('Address Copied', {
        description: `${address}`
      })
    } else {
      toast.error('Failed to copy')
    }
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={'sm'}><Eye /> Addresses</Button>
      </PopoverTrigger>
      <PopoverContent side='left' align='start' className='bg-primary-foreground/60 text-primary backdrop-blur-lg max-w-min'>
        <div className='text-sm space-y-3'>
          {
            wallets.map((item,index) => (
              <div key={index + item} className='flex items-center gap-2'>
                <button onClick={() => handleCopy(item)} className="text-sm">
                  <Copy className="w-4" />
                </button>
                <Link className='text-xs font-semibold hover:underline' href={toLinkRef(link_ref, item)} target="_blank" rel="noopener noreferrer">{cutString(item, 10)}</Link>
              </div>
            ))
          }
        </div>
      </PopoverContent>
    </Popover>
  )
}
