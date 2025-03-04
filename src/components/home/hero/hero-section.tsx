"use client"
import ConnectButton from '@/components/connect-button'
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
export default function HeroSection() {
  return (
    <section className='py-6 relative aspect-auto md:aspect-[1440/523]'>
      <div className="z-0 absolute left-0 right-0 bottom-0 top-0 bg-red">
        <Image quality={100} src={'/images/bg-hero-home.png'} fill className='w-full h-full object-cover' alt="bacground spore hero" />
      </div>
      <motion.div
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.6,
          delay: 0,
          ease: "easeOut",
        }}
        className="container relative z-10 flex flex-col items-center justify-center h-auto md:h-full">
        <div className="text-center max-w-5xl w-full mx-auto mb-4 md:mb-10 text-[#D6F8DD] space-y-1 md:space-y-4">
          <h1 className='text-lg leading-normal md:leading-tight sm:text-xl md:text-2xl lg:text-[38px] font-semibold'>DEGENS IN CONTROL</h1>
          <div className='text-xs leading-normal md:leading-tight sm:text-sm md:text-lg lg:text-[38px]'>100% of The Trading Fees Go back to The Trenches</div>
          <p className='text-[10px] leading-normal md:leading-tight sm:text-xs md:text-base lg:text-[32px]'>Other launchpads extract millions. Flaunch sends it all back</p>
        </div>
        <ConnectButton label='Go To Wallet' />
      </motion.div>
    </section>
  )
}
