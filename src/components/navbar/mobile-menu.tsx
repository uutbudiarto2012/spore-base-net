'use client'
import { cn } from '@/lib/utils'
import { FileUser, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBookOpen } from 'react-icons/fa6'

export default function MobileMenu() {
  const pathname = usePathname()
  const segmen1 = pathname.split('/')[1]
  return (
    <div className='flex z-30 lg:hidden fixed bottom-0 left-0 right-0 bg-[#00140F]/50 backdrop-blur border-t py-2'>
      <div className="max-w-xl mx-auto flex items-center justify-around w-full">
        <Link href={'/'} className={cn(
          'flex flex-col items-center justify-center',
          !segmen1 ? 'text-[#27CC99]' : 'text-[#D6F8DD]'
        )}>
          <Home className='w-5' />
          <p className='text-[10px] font-medium mt-1'>Home</p>
        </Link>
        {/* <Link href={'/airdrop'} className={cn(
          'flex flex-col items-center justify-center',
          segmen1 === 'airdrop' ? 'text-[#27CC99]' : 'text-[#D6F8DD]'
        )}>
          <Droplets className='w-5' />
          <p className='text-[10px] font-medium mt-1'>Airdrop</p>
        </Link> */}
        <Link href={'/dashboard'} className={cn(
          'flex flex-col items-center justify-center',
          segmen1 === 'dashboard' ? 'text-[#27CC99]' : 'text-[#D6F8DD]'
        )}>
          <FileUser className='w-5' />
          <p className='text-[10px] font-medium mt-1'>Dashboard</p>
        </Link>
        <Link href={'https://sporevc.gitbook.io/spore-vc'} target="_blank" rel="noopener noreferrer" className={cn(
          'flex flex-col items-center justify-center',
          segmen1 === 'document' ? 'text-[#27CC99]' : 'text-[#D6F8DD]'
        )}>
          <FaBookOpen className='w-5' />
          <p className='text-[10px] font-medium mt-1'>Document</p>
        </Link>
      </div>
    </div>
  )
}
