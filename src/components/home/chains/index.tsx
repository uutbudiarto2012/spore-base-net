"use client"
import Marquee from "react-fast-marquee";
import { useChains } from "@/hooks/useChains"
import Image from "next/image";

export default function ChainSection() {
  const { data, isPending } = useChains()

  return (
    <section className='bg-[#607466] py-6 md:py-12 space-y-2 md:space-y-5'>
      <Marquee speed={100} pauseOnHover>
        {
          !isPending && data?.data && data?.data.map(item => (
            <div className="mx-2 md:mx-6 min-w-32 flex items-center justify-center bg-[#00140F] hover:bg-[#27CC99] hover:text-black px-4 py-2 gap-2 rounded-lg" key={item.id}>
              <Image width={20} height={20} alt="i" src={`/images/chains/${item.name}.png`} />
              {item.name}
            </div>
          ))
        }
      </Marquee>
      <Marquee speed={80} pauseOnHover direction="right">
        {
          !isPending && data?.data && data?.data.map(item => (
            <div className="mx-2 md:mx-6 min-w-32 flex items-center justify-center bg-[#00140F] hover:bg-[#27CC99] hover:text-black px-4 py-2 gap-2 rounded-lg" key={item.id}>
              <Image width={20} height={20} alt="i" src={`/images/chains/${item.name}.png`} />
              {item.name}
            </div>
          ))
        }
      </Marquee>
      <Marquee speed={110} pauseOnHover direction="left">
        {
          !isPending && data?.data && data?.data.map(item => (
            <div className="mx-2 md:mx-6 min-w-32 flex items-center justify-center bg-[#00140F] hover:bg-[#27CC99] hover:text-black px-4 py-2 gap-2 rounded-lg" key={item.id}>
              <Image width={20} height={20} alt="i" src={`/images/chains/${item.name}.png`} />
              {item.name}
            </div>
          ))
        }
      </Marquee>
    </section>
  )
}
