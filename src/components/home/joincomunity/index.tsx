import { Button } from "@/components/ui/button"
import Link from "next/link"

const JoinComunity = () => {
  return (
    <div className="p-3">
      <div className="container aspect-auto lg:aspect-[237/50] bg-[url(/images/bg-join-telegram.png)] bg-cover flex items-center rounded-2xl overflow-hidden justify-center">
        <div className="max-w-3xl p-4 lg:p-0 mx-auto flex flex-col justify-center items-center gap-4">
          <h2 className="text-xl md:text-[32px] leading-normal text-center font-bold text-black">
            Be the first to know about updates and exclusive opportunities. Join our community!
          </h2>
          <Button size={"lg"} variant={"primary-light"} className="font-bold" asChild>
            <Link href="https://t.me/sporevc" target="_blank" rel="noopener noreferrer">Join Telegram</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JoinComunity