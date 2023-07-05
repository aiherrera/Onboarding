import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FEMSA | Onboarding',
  description: 'App to onboard new employees to FEMSA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth  antialiased" suppressHydrationWarning>
        <body className={`${inter.className} bg-lime-50`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
