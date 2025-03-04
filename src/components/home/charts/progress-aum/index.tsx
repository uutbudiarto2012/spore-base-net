import React from 'react'
type ProgressAumProps = {
  target: number
  actual: number
}
function ProgressAum({ target, actual }: ProgressAumProps) {
  return (
    <div className='relative h-[40px] w-full bg-[#D6F8DD] rounded-full'>
      <div className='items-center  justify-around h-full flex w-full relative z-10'>
        <p className='text-black'>{actual} Values</p>
        <p className='text-black'>{target} Values</p>
      </div>
      <div
        style={{
          width: `${(actual / target) * 100}%`
        }}
        className="h-full absolute left-0 top-0 bottom-0 rounded-full bg-[#27CC99]"></div>
    </div>
  )
}

export default ProgressAum