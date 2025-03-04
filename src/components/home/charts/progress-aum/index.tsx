
type ProgressAumProps = {
  target: number
  actual: number
}
function ProgressAum({ target, actual }: ProgressAumProps) {
  const prog = actual / target * 100
  return (
    <div className='relative h-[40px] w-full bg-[#D6F8DD] rounded-full'>
      <div className='items-center  justify-around h-full flex w-full relative z-10'>
        <p className='text-black font-bold text-sm'>{actual.toFixed(2)} Values</p>
        <p className='text-black font-bold text-sm'>{target} Values</p>
      </div>
      <div
        style={{
          width: `${prog > 100 ? prog : 5}%`
        }}
        className="h-full absolute left-0 top-0 bottom-0 rounded-full bg-[#27CC99]"></div>
    </div>
  )
}

export default ProgressAum