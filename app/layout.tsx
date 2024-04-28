import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import RootProviders from '@/components/providers/RootProviders'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wallet Watch',
  description:
    'Wallet Watch is a personal finance management tool that helps you track your expenses, income, and investments.',
  authors: [{ name: 'PunGrumpy', url: 'https://pungrumpy.com' }],
  creator: 'PunGrumpy',
  applicationName: 'Wallet Watch',
  keywords: ['Personal Finance', 'Expense Tracker', 'Investment Tracker']
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="dark"
        style={{
          colorScheme: 'dark'
        }}
      >
        <body className={inter.className}>
          <Toaster richColors position="bottom-right" />
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  )
}
