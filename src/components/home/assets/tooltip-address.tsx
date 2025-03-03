import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cutString } from "@/lib/utils"
import { Copy } from "lucide-react"
import { CopyToClipboard } from 'react-copy-to-clipboard';
export function TooltipAddress({
  address,
  children,
  link_ref,
}: {
  address: string,
  link_ref: string,
  children: React.ReactNode
}) {
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
            <CopyToClipboard text={address}>
              <button className="text-sm">
                <Copy className="w-4" />
              </button>
            </CopyToClipboard>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
