import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Template Starter',
  description: 'A Next.js & Tailwind template starter',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth  antialiased">
        <body className="bg-lime-50">{children}</body>
      </html>
    </ClerkProvider>
  )
}
