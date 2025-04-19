'use client'
import { Droplets, Home, LayoutGrid } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBookOpen } from 'react-icons/fa6'
import ConnectButton from '../connect-button'
import ConnectButtonSmall from '../connect-button-small'
import MainLogo from '../main-logo'
import DropdownNavbar from './dropdown-navbar'

export default function MainNavbar() {
  const pathname = usePathname()
  const segmen1 = pathname.split('/')[1]
  return (
    //  border-[#E3E3E3]/20 border-b
    <nav className='sticky top-0 z-20 backdrop-blur-lg'>
      <div className="container flex items-center h-[60px] md:h-[60px]">
        <div className='w-1/2 lg:w-1/4 shrink-0 h-full flex items-center'>
          <MainLogo />
        </div>
        <div className='flex-1 justify-center h-full items-center hidden lg:flex'>
          <div className="flex h-full">
            <Link href={'/'} className='text-sm cursor-pointer flex gap-1 items-center relative w-40 font-semibold text-[#D6F8DD] justify-center'>
              {!segmen1 && <Image className='h-full w-full object-cover py-2' fill alt='active' src={'/svg/bg-active-menu.svg'} />}
              <div className='flex items-center gap-1'><Home className='w-5' /> Home</div>
            </Link>
            <Link href={'/airdrop'} className='text-sm cursor-pointer flex gap-1 items-center relative w-40 font-semibold text-[#D6F8DD] justify-center'>
              {segmen1 === 'airdrop' && <Image className='h-full w-full object-cover py-2' fill alt='active' src={'/svg/bg-active-menu.svg'} />}
              <div className='flex items-center gap-1'>
                <Droplets className='w-5' /> Airdrop
              </div>
            </Link>
            <Link href={'/dashboard'} className='text-sm cursor-pointer flex gap-1 items-center relative w-40 font-semibold text-[#D6F8DD] justify-center'>
              {segmen1 ==='dashboard' && <Image className='h-full w-full object-cover py-2' fill alt='active' src={'/svg/bg-active-menu.svg'} />}
              <div className='flex items-center gap-1'>
                <LayoutGrid className='w-5' /> Dashboard
              </div>
            </Link>
            <Link href={'https://sporevc.gitbook.io/spore-vc'} target="_blank" rel="noopener noreferrer" className='text-sm cursor-pointer flex gap-1 items-center relative w-40 font-semibold text-[#D6F8DD] justify-center'>
              <div className='flex items-center gap-1'>
                <FaBookOpen className='w-5' /> Document
              </div>
            </Link>
          </div>
        </div>
        <div className='w-1/2 lg:w-1/4 shrink-0 flex justify-end gap-12 items-center'>
          <div className='flex gap-2 items-center'>
            <div className="hidden md:flex">
              <ConnectButton />
            </div>
            <div className="md:hidden flex">
              <ConnectButtonSmall />
            </div>
            <DropdownNavbar />
          </div>
        </div>
      </div>
    </nav>
  )
}
