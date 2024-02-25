'use client'

import '@/app/main.css'
import { instance } from '@/shared/api/axiosInstance'
import { jost } from '@/shared/styles/fonts'
import { cn } from '@/shared/utils/classNames'
import { useEffect } from 'react'
import Providers from './providers'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  useEffect(() => {
    const isAuth = async () => {
      const { data } = await instance.get('is-auth/')

      return data
    }
    isAuth()
  }, [])

  return (
    <html
      className='bg-background text-foreground'
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={cn(
          'min-h-screen text-base font-normal',
          jost.className
        )}
      >
        <Providers attribute='class' defaultTheme='system' enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
