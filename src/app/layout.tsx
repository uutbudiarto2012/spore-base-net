import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import ContextProvider from "@/context";
import { headers } from "next/headers";
import { cn } from "@/lib/utils";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/sonner";

const ms = Montserrat({
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: "SporeVC",
  description: "Spore Venture Capital Project",
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
