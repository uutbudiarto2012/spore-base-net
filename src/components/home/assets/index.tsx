'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { useClientBalanceWallet } from '@/hooks/useAssetList'
import { cn, NumberComma } from "@/lib/utils"
import { LoaderIcon } from 'lucide-react'
import Image from "next/image"
import { BsGlobeAmericas } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { RiTelegram2Fill, RiTwitterXLine } from 'react-icons/ri'
import TooltipMultiAddress from "./tooltip-multi-address"

export default function AssetList() {
  const { data, isPending } = useClientBalanceWallet()
  return (
    <div className="container">
      <div className="mb-3">
        <div className="flex items-center gap-2">
          <div className='text-[#27CC99] text-xl md:text-2xl font-bold'>Tokens</div>
          <div className="border border-white/80 px-2 py-1 rounded-lg text-sm">
            Total: {data?.total ? NumberComma(data?.total) : 0} USD
          </div>
        </div>
      </div>
      <div className="border rounded-xl border-[#D6F8DD]/80 overflow-hidden">
        <Table>
          <TableHeader>
            <TableHead className="bg-[#D6F8DD] text-[#454343]">CHAIN</TableHead>
            <TableHead className="bg-[#D6F8DD] text-[#454343]">TICKER</TableHead>
            <TableHead className="bg-[#D6F8DD] text-[#454343]">BALANCE</TableHead>
            <TableHead className="bg-[#D6F8DD] text-[#454343]">PRICE (USD)</TableHead>
            <TableHead className="bg-[#D6F8DD] text-[#454343]">SUB TOTAL</TableHead>
            <TableHead className="bg-[#D6F8DD] text-[#454343]">SOCIAL</TableHead>
            <TableHead className="bg-[#D6F8DD] text-[#454343]">AUM WALLET</TableHead>
          </TableHeader>
          <TableBody>
            {isPending ? (
              <TableRow>
                <TableCell className='text-center h-32' colSpan={7}>
                  <div className="flex items-center gap-1 justify-center">
                    <LoaderIcon className='animate-spin w-4' /> Loading Asset...
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <>
                  {
                  data?.data?.map((item,index) => (
                    <TableRow className="border-dashed border-primary/10" key={index}>
                      <TableCell>
                        <div className="flex gap-2 items-center">
                          <Image width={20} height={20} src={`/images/chains/${item.chain.name}.png`} alt={item.chain.name} />
                          {item.chain.name}
                        </div>
                      </TableCell>
                      <TableCell>{item.ticker.name}</TableCell>
                      <TableCell>{NumberComma(item.balance)}</TableCell>
                      <TableCell>$ {item.price}</TableCell>
                      <TableCell>$ {NumberComma(item.balance * item.price)}</TableCell>
                      <TableCell>
                        <div className='flex gap-2 justify-center'>
                          <a href={item.ticker.x ?? '#'} target="_blank" rel="noopener noreferrer" className={cn(
                            "h-6 w-6 border rounded-lg flex items-center justify-center",
                            item.ticker.x ? 'bg-primary/80 text-black' : 'bg-slate-500/20'
                          )}>
                            <RiTwitterXLine className='text-sm' />
                          </a>
                          <a href={item.ticker.telegram ?? '#'} target="_blank" rel="noopener noreferrer" className={cn(
                            "h-6 w-6 border rounded-lg flex items-center justify-center",
                            item.ticker.telegram ? 'bg-primary/80 text-black' : 'bg-slate-500/20'
                          )}>
                            <RiTelegram2Fill className='text-sm' />
                          </a>
                          <a href={item.ticker.web ?? '#'} target="_blank" rel="noopener noreferrer" className={cn(
                            "h-6 w-6 border rounded-lg flex items-center justify-center",
                            item.ticker.web ? 'bg-primary/80 text-black' : 'bg-slate-500/20'
                          )}>
                            <BsGlobeAmericas className='text-sm' />
                          </a>
                          <a href={item.ticker.dc ?? '#'} target="_blank" rel="noopener noreferrer" className={cn(
                            "h-6 w-6 border rounded-lg flex items-center justify-center",
                            item.ticker.dc ? 'bg-primary/80 text-black' : 'bg-slate-500/20'
                          )}>
                            <FaDiscord className='text-sm' />
                          </a>
                        </div>
                      </TableCell>
                      <TableCell>
                        <TooltipMultiAddress wallets={item.wallets} link_ref={item.link_ref} />
                      </TableCell>
                    </TableRow>
                  ))
                }
              </>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
