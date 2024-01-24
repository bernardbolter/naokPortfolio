import Nav from '@/components/nav'
import Logo from '@/components/logo'
import PageTransitionEffect from '@/app/PageTransitionEffect'
import NaokProvider from '@/providers/NaokProvider'

import { Inter } from 'next/font/google'
import '@/styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naok',
  description: 'Artwork',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Logo />
        <Nav />
        <PageTransitionEffect>
          <NaokProvider>
            {children}
          </NaokProvider>
        </PageTransitionEffect>
      </body>
    </html>
  )
}
