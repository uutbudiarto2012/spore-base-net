import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainLogo() {
  return (
    <Link href={'/'} className='w-24 sm:w-28 md:w-32 h-20 relative flex'>
      <Image className='w-full h-full object-contain' src={'/logo/logo-footer.png'} fill alt='spore vc logo' />
    </Link>
  )
}
