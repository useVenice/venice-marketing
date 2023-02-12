import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import posthog from 'posthog-js'
import { useEffect } from 'react'

// Note: Chrome has a bug for display = 'optional'
// More info: https://blog.logrocket.com/next-js-font-optimization/
const inter = Inter({
  display: 'block',
  subsets: ['latin'],
  variable: '--inter-font',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // needs window loaded
    posthog.init('phc_2FGDaziiNXGl4WSFTLsWcnbrVJDAkYW7mrsXw0Y8GR3', { 
      api_host: 'https://app.posthog.com',
      autocapture: true,
    })
  }, []);

  return (
    <>
      <main className={`${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
