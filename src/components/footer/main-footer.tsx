import Image from 'next/image'
import Link from 'next/link'
import { BsTelegram, BsTwitterX } from 'react-icons/bs'

function MainFooter() {
  return (
    <footer className='bg-[#27CC99] text-[#00140F] py-6 md:py-12 hidden lg:block'>
      <div className="container grid grid-cols-3">
        <div>
          <div className="max-w-44 flex flex-col items-center">
            <Link href={'/'} className='w-44 aspect-square relative flex'>
              <Image className='w-full h-full object-contain' src={'/logo/logo-dark.png'} fill alt='spore vc logo' />
            </Link>
            <div className="flex items-center gap-2">
              <Link className='flex h-8 w-8 border items-center justify-center rounded-lg' href="https://x.com/sporevc" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </Link>
              <Link className='flex h-8 w-8 border items-center justify-center rounded-lg' href="https://t.me/sporevc" target="_blank" rel="noopener noreferrer">
                <BsTelegram />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='space-y-4 md:space-y-6 '>
            <div>
              <h2 className='text-[22px] text-[#00140F] font-bold'>About</h2>
              <div className='mt-3'>
                <Link href={'/'}>About Us</Link>
              </div>
            </div>
            <div>
              <h2 className='text-[22px] text-[#00140F] font-bold'>Community</h2>
              <div className='mt-3'>
                <Link href={'/'}>Telegram Group</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='space-y-4 md:space-y-6'>
            <div>
              <h2 className='text-[22px] text-[#00140F] font-bold mb-3'>Documentation</h2>
              <div className='mt-3 space-y-4'>
                <Link className='flex' target="_blank" rel="noopener noreferrer" href={'https://sporevc.gitbook.io/spore-vc'}>Docs</Link>
                <Link className='flex' href={'/dashboard'}>Dashboard</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter