import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from 'widgets/header'
import Container from './Container'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  )
}
