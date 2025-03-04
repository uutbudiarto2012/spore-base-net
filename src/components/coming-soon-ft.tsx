import React from 'react'
import { FaRegFaceSmileWink } from 'react-icons/fa6'

export default function ComingSoonFt() {
  return (
    <div className='container h-[50vh] flex items-center justify-center'>
      <div className='space-y-5 max-w-3xl mx-auto relative z-10'>
        <div className="absolute left-0 right-0 bottom-0 top-0 z-0 flex items-center justify-center">
          <div className='w-56 h-20 blur-3xl rounded-full bg-white/60'>OK</div>
        </div>
        <div className='text-center relative z-10'>
          <div className='flex justify-center items-center'>
            <FaRegFaceSmileWink className='text-5xl' />
          </div>
          <h2 className='text-3xl font-light text-[#FFF]'>Exciting things are on the way!</h2>
          <p className='text-2xl md:text-4xl md:mt-4 font-bold uppercase text-[#27CC99]'>Stay tuned</p>
        </div>
      </div>
    </div>
  )
}
