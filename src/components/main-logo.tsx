import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainLogo() {
  return (
    <Link href={'/'} className='w-[121px] h-[45px] md:w-[151px] md:h-[60px] relative flex'>
      <Image className='w-full h-full object-contain' src={'/logo/logo-green.png'} fill alt='spore vc logo' />
    </Link>
  )
}
