"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cutString } from "@/lib/utils";
import { Copy } from "lucide-react";
import copy from 'copy-to-clipboard';
import { toast } from "sonner";

export function TooltipAddress({
  address,
  children,
  link_ref,
}: {
  address: string,
  link_ref: string,
  children: React.ReactNode
}) {

  function handleCopy() {
    copy(address, {
      message: "Coppyyyy",
      onCopy() {
        toast.success('Address Copied', {
          description: `${address}`
        })
      },
    })
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <p>{cutString(address, 6)}</p>
        </TooltipTrigger>
        <TooltipContent side="left">
          <div className="flex items-center gap-2">
            <a className="text-xs font-light" href={link_ref} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
            <button onClick={() => handleCopy()} className="text-sm">
              <Copy className="w-4" />
            </button>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
