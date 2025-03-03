import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import ContextProvider from "@/context";
import { headers } from "next/headers";
const os = Open_Sans({
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
        className={os.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ContextProvider cookies={cookies}>
          {children}

          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
