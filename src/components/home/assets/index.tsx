'use client'
import { BsGlobeAmericas } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { RiTelegram2Fill, RiTwitterXLine } from 'react-icons/ri'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { useAssetList } from '@/hooks/useAssetList'
import { cn, cutString, NumberComma } from "@/lib/utils"
import { TooltipAddress } from './tooltip-address'
import { LoaderIcon } from 'lucide-react'

export default function AssetList() {
  const { data, isPending } = useAssetList({ page: 1, pageSize: 100 })
  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase">Asset List</CardTitle>
        <CardDescription>
          <div className="flex items-center gap-2">
            Total:
            <div className="text-lg font-bold text-primary">{NumberComma(data?.data.total_balance_usd!)} USD</div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>CHAIN</TableHead>
              <TableHead>TICKER</TableHead>
              <TableHead>BALANCE</TableHead>
              <TableHead>PRICE (USD)</TableHead>
              <TableHead>SUB TOTAL</TableHead>
              <TableHead>SOCIAL</TableHead>
              <TableHead>AUM WALLET</TableHead>
            </TableRow>
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
                  data?.data.data.map(item => (
                    <TableRow key={item.id}>
                      <TableCell>{item.chain.name}</TableCell>
                      <TableCell>{item.ticker.name}</TableCell>
                      <TableCell>{NumberComma(item.balance)}</TableCell>
                      <TableCell>$ {item.price}</TableCell>
                      <TableCell>$ {NumberComma(item.balance * item.price)}</TableCell>
                      <TableCell>
                        <div className='flex gap-2 justify-center'>
                          <a href={item.ticker.x!} target="_blank" rel="noopener noreferrer" className={cn(
                            "h-6 w-6 border rounded-lg flex items-center justify-center",
                            item.ticker.x ? 'bg-primary/80 text-black' : 'bg-slate-500/20'
                          )}>
                            <RiTwitterXLine className='text-sm' />
                          </a>
                          <a href={item.ticker.telegram!} target="_blank" rel="noopener noreferrer" className={cn(
                            "h-6 w-6 border rounded-lg flex items-center justify-center",
                            item.ticker.telegram ? 'bg-primary/80 text-black' : 'bg-slate-500/20'
                          )}>
                            <RiTelegram2Fill className='text-sm' />
                          </a>
                          <a href={item.ticker.web!} target="_blank" rel="noopener noreferrer" className={cn(
                            "h-6 w-6 border rounded-lg flex items-center justify-center",
                            item.ticker.web ? 'bg-primary/80 text-black' : 'bg-slate-500/20'
                          )}>
                            <BsGlobeAmericas className='text-sm' />
                          </a>
                          <a href={item.ticker.dc!} target="_blank" rel="noopener noreferrer" className={cn(
                            "h-6 w-6 border rounded-lg flex items-center justify-center",
                            item.ticker.dc ? 'bg-primary/80 text-black' : 'bg-slate-500/20'
                          )}>
                            <FaDiscord className='text-sm' />
                          </a>
                        </div>
                      </TableCell>
                      <TableCell>
                        <TooltipAddress address={item.wallet} link_ref={item.link_ref}>
                          {item.wallet}
                        </TooltipAddress>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
