"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cutString } from "@/lib/utils"
import { useAppKitAccount, useDisconnect } from "@reown/appkit/react"
import { File, MoreHorizontal, Power, UserCheck2, UserCircle } from "lucide-react"
import { Button } from "../ui/button"
import ConnectButton from "../connect-button"

export default function DropdownNavbar() {
  const { address, isConnected } = useAppKitAccount()
  const { disconnect } = useDisconnect()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"}>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-4" align="end">
        <DropdownMenuLabel>
          {
            !isConnected ? (
              <div className="flex gap-2 items-center">
                <div className="flex flex-1 items-center text-sm text-destructive gap-2">
                  Disconnected
                </div>
                <button className="text-destructive">
                  <Power className="w-4" />
                </button>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <div className="flex flex-1 items-center gap-2">
                  <UserCircle className="w-4" />
                  <p>{address ? cutString(address, 5) : 'Profile'}</p>
                </div>
                <button onClick={disconnect}>
                  <Power className="w-4" />
                </button>
              </div>
            )
          }

        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Dashboard
          <DropdownMenuShortcut>
            <UserCheck2 className="w-4" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Docs
          <DropdownMenuShortcut>
            <File className="w-4" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="flex md:hidden" />
        <DropdownMenuItem asChild>
          <div className="flex md:hidden justify-center items-center">
            <ConnectButton />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
