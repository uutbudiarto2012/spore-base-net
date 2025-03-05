'use client'
import React from "react";
import { FaUserFriends } from "react-icons/fa";

type SporeCardProps = {
  icon: React.ReactNode
  label: string
  value?: number | string
  isActive?:boolean
}
function SporeCard(props: SporeCardProps) {
  return (
    <div className='border text-[#27CC99] relative gap-2 p-3 items-center rounded-xl  border-[#27CC99]/50 bg-[#D6F8DD]/5 flex'>
      { props?.isActive === true && <div className="text-[10px] text-[#27CC99] px-1 absolute right-2 top-2 rounded bg-[#27CC99]/20">Active</div>}
      { props?.isActive === false && <div className="text-[10px] text-red-500 px-2 absolute right-2 top-2 rounded-full bg-red-500/20">In Active</div>}
      <div className="w-12 h-12 rounded-md shrink-0 flex items-center justify-center border  bg-[#27CC99]/20 border-[#27CC99]/10">
        {props.icon ?? <FaUserFriends className="w-7 h-7" />}
      </div>
      <div className="flex-1">
        <p className="text-[#D6F8DD] leading-normal text-[14px]">{props.label}</p>
        {
          props.value ? (
            <div className="text-[20px] font-semibold text-[#27CC99]">{props.value}</div>
          ) : (
            <div className="w-12 h-6 mt-1 rounded-md bg-[#D6F8DD]/50 animate-pulse"></div>
          )
        }
      </div>
    </div>
  )
}

export default SporeCard