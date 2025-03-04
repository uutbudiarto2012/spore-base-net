'use client'
import dayjs from 'dayjs'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { useSporeToken } from "@/hooks/useSporeToken"
import { createScanUrlGNosis, NumberComma } from "@/lib/utils"
import { useAppKitAccount } from "@reown/appkit/react"
import { LoaderIcon } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function Transactions() {
  const { address } = useAppKitAccount()
  const { data, isPending } = useSporeToken({ address })
  return (
    <div className="container">
      <div className="mb-2 px-2">
        <div className="flex items-center gap-2 justify-between">
          <div className='text-[#27CC99] text-xl md:text-2xl font-bold'>Claim History</div>
          <div className='text-[#D6F8DD]'>10 Last Claim</div>
        </div>
      </div>
      <div className="border rounded-xl border-[#D6F8DD]/80 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-[#D6F8DD] font-bold text-[#454343]">EPOCH</TableHead>
              <TableHead className="bg-[#D6F8DD] font-bold text-[#454343]">DATE</TableHead>
              <TableHead className="bg-[#D6F8DD] font-bold text-[#454343]">TIME</TableHead>
              <TableHead className="bg-[#D6F8DD] font-bold text-[#454343]">CLAIMED</TableHead>
              <TableHead className="bg-[#D6F8DD] font-bold text-[#454343]">TOTAL</TableHead>
              <TableHead className="bg-[#D6F8DD] font-bold text-[#454343]">SCANER</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isPending ? (
              <TableRow>
                <TableCell className='text-center h-32' colSpan={7}>
                  <div className="flex items-center gap-1 justify-center">
                    <LoaderIcon className='animate-spin w-4' /> Loading History...
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <>
                {
                  data?.data.data.map(item => (
                    <TableRow className="border-dashed border-primary/10" key={item.id}>
                      <TableCell>
                        {item?.epoch?.epoch}
                      </TableCell>
                      <TableCell>{dayjs(item.createdAt).format('YYYY-MM-DD')}</TableCell>
                      <TableCell>{dayjs(item.createdAt).format('HH:mm-ss')}</TableCell>
                      <TableCell>{NumberComma(+item.claim)}</TableCell>
                      <TableCell>{NumberComma(+item.totalClaim)}</TableCell>
                      <TableCell>
                        <Button size={'sm'} variant={"primary-outline"} asChild>
                          <Link target="_blank" rel="noopener noreferrer" href={createScanUrlGNosis({
                            type: "tx",
                            hash: item.txn
                          })}>
                            <Image className='grayscale' width={15} height={15} src={'/images/chains/gnosis-white.png'} alt='scaner' /> Scan
                          </Link>
                        </Button>
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
