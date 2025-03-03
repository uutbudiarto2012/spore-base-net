import { Droplets, FileUser, Home } from 'lucide-react'
import Link from 'next/link'

export default function MobileMenu() {
  return (
    <div className='flex lg:hidden fixed bottom-0 left-0 right-0 backdrop-blur border-t py-2'>
      <div className="max-w-xl mx-auto flex items-center justify-around w-full">
        <Link href={'/'} className='flex flex-col items-center justify-center'>
          <Home className='w-6' />
          <p className='text-[11px] font-medium mt-1'>Home</p>
        </Link>
        <Link href={'/airdrop'} className='flex flex-col items-center justify-center'>
          <Droplets className='w-6' />
          <p className='text-[11px] font-medium mt-1'>Airdrop</p>
        </Link>
        <Link href={'/dashboard'} className='flex flex-col items-center justify-center'>
          <FileUser className='w-6' />
          <p className='text-[11px] font-medium mt-1'>Profile</p>
        </Link>
      </div>
    </div>
  )
}
