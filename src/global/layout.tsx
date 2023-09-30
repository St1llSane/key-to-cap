import type { Metadata } from 'next'
import { cn } from 'shared/lib/utils/classNames'
import { jost } from 'shared/styles/fonts'
import Container from 'widgets/container'
import Header from 'widgets/header'
import Providers from './Providers'
import './main.css'

export const metadata: Metadata = {
  title: 'KeyToCap Store',
  description: 'A store selling custom keyboards'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className='text-foreground bg-background'
      lang='en'
      suppressHydrationWarning
    >
      <body className={cn('text-base', jost.className)}>
        <Providers attribute='class' defaultTheme='system' enableSystem>
          <Header />
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  )
}
