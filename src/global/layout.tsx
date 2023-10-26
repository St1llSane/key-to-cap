import type { Metadata } from 'next'
import { jost } from 'shared/styles/fonts'
import { cn } from 'shared/utils/classNames'
import Header from 'widgets/header'
import Container from 'widgets/layouts/container'
import './main.css'
import Providers from './providers'

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
      className='bg-background text-foreground'
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
