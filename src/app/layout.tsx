import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import { Providers } from '@/lib/redux/provider'

export const metadata: Metadata = {
  title: 'Hashread',
  description: 'A blogsite for future minds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-tan text-sin'>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
