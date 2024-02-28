'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

const Providers = ({ children }: ThemeProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
      >
        <Toaster
          theme='system'
          richColors
          pauseWhenPageIsHidden
          duration={3500}
          toastOptions={{
            classNames: {
              cancelButton:
                'absolute right-0 top-0 !w-8 !h-8 !p-0 justify-center !bg-none'
            }
          }}
        />
        {children}
      </NextThemesProvider>
    </QueryClientProvider>
  )
}

export default Providers
