import { Droplets, FileUser, Home } from 'lucide-react'
import Link from 'next/link'
import ConnectButton from '../connect-button'
import ConnectButtonSmall from '../connect-button-small'
import MainLogo from '../main-logo'
import DropdownNavbar from './dropdown-navbar'

export default function MainNavbar() {
  return (
    <nav className='sticky top-0 z-20 backdrop-blur-lg'>
      <div className="container flex items-center h-[60px] md:h-[70px]">
        <div className='w-1/2 lg:w-1/4 shrink-0 h-full flex items-center'>
          <MainLogo />
        </div>
        <div className='flex-1 justify-center h-full items-center hidden lg:flex'>
          <div className="flex h-12 px-6 rounded-full backdrop-blur  gap-12 bg-primary-foreground/30 items-center">
            <Link href={'/'} className='text-sm flex gap-1 items-center'>
              <Home className='w-5' />
              Home
            </Link>
            <Link href={'/airdrop'} className='text-sm flex gap-1 items-center'>
              <Droplets className='w-5' />
              Airdrop
            </Link>
            <Link href={'/dashboard'} className='text-sm flex gap-1 items-center'>
              <FileUser className='w-5' />
              Profile
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
