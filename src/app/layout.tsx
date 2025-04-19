import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import ContextProvider from "@/context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import { headers } from "next/headers";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const ms = Montserrat({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "SporeVC - DEGENS In Control",
  description: "The Trading Fees Go back to The Trenches Other launchpads extract millions.Flaunch sends it all back",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headersObj = headers();
  const cookies = headersObj.get('cookie')

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          ms.className,
          'bg-[#00140F]'
        )}
      >
        <NextTopLoader initialPosition={0.2} color="#27CC99" height={3} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ContextProvider cookies={cookies}>
            {children}
          </ContextProvider>
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
