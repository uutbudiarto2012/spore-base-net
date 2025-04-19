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
  title: "SporeVC - DEGENS In Control",
  description: "100% of The Trading Fees Go back to The Trenches Other launchpads extract millions.Flaunch sends it all back",
  keywords: [
    'crypto investment platform',
    'crypto project management',
    'token investment tracker',
    'blockchain project organizer',
    'crypto portfolio manager',
    'invest in crypto tokens',
    'manage crypto investments',
    'web3 project management tool',
    'cryptocurrency tools for investors',
    'ICO and token launch tracker',
    'crypto investor dashboard',
    'web3 team collaboration',
    'DeFi project management',
    'crypto asset management tool',
    'blockchain startup tools',
    'crypto task management app',
    'track crypto investments',
    'best crypto investment tools',
    'tools for crypto investors',
    'crypto roadmap management'
  ],
  authors: [{ name: 'Spore Team', url: 'https://spore-app.vercel.app' }],
  openGraph: {
    title: 'SporeVC - DEGENS In Control',
    description:
      '100% of The Trading Fees Go back to The Trenches Other launchpads extract millions.Flaunch sends it all back',
    url: 'https://spore-app.vercel.app',
    siteName: 'SporeVC',
    images: [
      {
        url: `${process.env.CLIENT_URL}/logo/logo.png`,
        width: 1200,
        height: 630,
        alt: 'SporeVC OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spore VC - DEGENS In Control',
    description:
      '100% of The Trading Fees Go back to The Trenches Other launchpads extract millions.Flaunch sends it all back',
    images: [`${process.env.CLIENT_URL}/logo/logo.png`],
    creator: '@sporevc',
  }
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
