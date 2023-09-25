import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import { cn } from 'shared/classNames'
import { Header } from 'widgets/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'KeyToCap Store',
	description: 'A store selling keyboards',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					inter.className,
					'w-full max-w-[1230px] mx-auto px-[15px]'
				)}
			>
				<Header />
				{children}
			</body>
		</html>
	)
}
