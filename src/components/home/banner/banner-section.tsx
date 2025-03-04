"use client"
import Image from 'next/image'
export default function BannerSection() {
  return (
    <section className='bg-[#00140F] relative w-full overflow-hidden h-[50vh]'>
      <div className="absolute left-0 right-0 bottom-0 top-0 bg-gradient-to-t from-[#00140F]/90 via-transparent to-[#00140F]/20 backdrop-blur-sm z-10">
        <div className="container h-full w-full flex justify-center md:justify-end items-center">
          <div data-aos="zoom-in-up" data-aos-duration={1000} className="w-56 md:w-[360px] aspect-video relative">
            <Image className='w-full h-full object-contain z-0' fill src={'/logo/logo-green.png'} alt='banner' />
          </div>
        </div>
      </div>
      <div className='w-full aspect-[12/4] relative z-0'>
        <Image className='w-full h-full z-0' fill src={'/images/banner-2.png'} alt='banner' />
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-tr from-black/20 to-transparent z-10'></div>
      </div>
    </section>
  )
}
