import Providers from 'pages/providers'
import { jost } from 'shared/styles/fonts'
import { cn } from 'shared/utils/classNames'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-background text-foreground' lang='en'>
      <body className={cn('text-base font-normal', jost.className)}>
        <Providers attribute='class' defaultTheme='system' enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  )
}
