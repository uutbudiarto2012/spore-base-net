"use client"
import ConnectButton from '@/components/connect-button'
import React from 'react'
import { motion } from "motion/react"
export default function HeroSection() {
  return (
    <section className='py-6'>
      <motion.div
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.6,
          delay: 0,
          ease: "easeOut",
        }}
        className="container sticky top-0 z-0 flex flex-col items-center justify-center h-auto md:h-[40vh]">
        <div className="text-center max-w-5xl w-full mx-auto mb-10">
          <h1 className='text-lg leading-normal md:text-[38px] font-semibold'>DEGENS IN CONTROL</h1>
          <div className='text-sm leading-normal md:text-[38px]'>100% of The Trading Fees Go back to The Trenches</div>
          <p className='text-xs leading-normal md:text-[32px]'>Other launchpads extract millions. Flaunch sends it all back</p>
        </div>
        <ConnectButton label='Go To Wallet' />
      </motion.div>
    </section>
  )
}
