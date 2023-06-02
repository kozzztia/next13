import '../styles/globals.scss';
import { Inter } from 'next/font/google';
import React from "react";
import LayoutHeader from "@/components/Header/LayoutHeader";
import LayoutFooter from "@/components/Footer/LayoutFooter";
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'reduxtoolkit learning',
  description: 'learning',
  icons: 'https://img.icons8.com/?size=512&id=121710&format=png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <LayoutHeader/>
      <Navigation/>
        {children}
      <LayoutFooter/>
      </body>
    </html>
  )
}
