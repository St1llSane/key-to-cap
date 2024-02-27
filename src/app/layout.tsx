import { Inter, Jost } from 'next/font/google'

import { cn } from '@/shared/utils/classNames'

import '@/app/main.css'

import Providers from './providers'

interface RootLayoutProps {
  children: React.ReactNode
}

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'KEYCAP - Keyboards and computer attributes shop',
  description: 'Keyboards and computer attributes',
  icons: {
    icon: [
      {
        url: '/images/icon.svg',
        href: '/images/icon.svg'
      }
    ]
  }
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      className={cn(
        'bg-background font-jost text-base font-normal text-foreground',
        jost.variable,
        inter.variable
      )}
      lang='en'
      suppressHydrationWarning
    >
      <body className='min-h-screen'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
