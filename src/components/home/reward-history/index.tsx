'use client'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import Link from "next/link"

export default function RewardHistory() {
  return (
    <div className="container">
      <div className="mb-3">
        <div className="flex items-center gap-2 justify-between">
          <div className='text-[#27CC99] text-xl md:text-2xl font-bold'>Reward History</div>
          <div>Filter Here...</div>
        </div>
      </div>
      <div className="border rounded-xl border-[#D6F8DD]/80 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-[#D6F8DD] text-[#454343]">NO</TableHead>
              <TableHead className="bg-[#D6F8DD] text-[#454343]">DATE</TableHead>
              <TableHead className="bg-[#D6F8DD] text-[#454343]">TIME</TableHead>
              <TableHead className="bg-[#D6F8DD] text-[#454343]">REWARD (USDC)</TableHead>
              <TableHead className="bg-[#D6F8DD] text-[#454343]">ELIGIBLE WALLET</TableHead>
              <TableHead className="bg-[#D6F8DD] text-[#454343]">SCANER</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-dashed border-primary/10">
              <TableCell>1</TableCell>
              <TableCell>12 Jan 2012</TableCell>
              <TableCell>12:12:12</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>
                <Button size={'sm'} variant={"primary-outline"} asChild>
                  <Link href={'/'}>Link</Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-dashed border-primary/10">
              <TableCell>1</TableCell>
              <TableCell>12 Jan 2012</TableCell>
              <TableCell>12:12:12</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>
                <Button size={'sm'} variant={"primary-outline"} asChild>
                  <Link href={'/'}>Link</Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-dashed border-primary/10">
              <TableCell>1</TableCell>
              <TableCell>12 Jan 2012</TableCell>
              <TableCell>12:12:12</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>
                <Button size={'sm'} variant={"primary-outline"} asChild>
                  <Link href={'/'}>Link</Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-dashed border-primary/10">
              <TableCell>1</TableCell>
              <TableCell>12 Jan 2012</TableCell>
              <TableCell>12:12:12</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>
                <Button size={'sm'} variant={"primary-outline"} asChild>
                  <Link href={'/'}>Link</Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-dashed border-primary/10">
              <TableCell>1</TableCell>
              <TableCell>12 Jan 2012</TableCell>
              <TableCell>12:12:12</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>
                <Button size={'sm'} variant={"primary-outline"} asChild>
                  <Link href={'/'}>Link</Link>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-dashed border-primary/10">
              <TableCell>1</TableCell>
              <TableCell>12 Jan 2012</TableCell>
              <TableCell>12:12:12</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>88888</TableCell>
              <TableCell>
                <Button size={'sm'} variant={"primary-outline"} asChild>
                  <Link href={'/'}>Link</Link>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
