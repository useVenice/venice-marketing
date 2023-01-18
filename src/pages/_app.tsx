import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat, PT_Mono } from '@next/font/google'
import posthog from 'posthog-js'
import { useEffect } from 'react'

// Note: Chrome has a bug for display = 'optional'
// More info: https://blog.logrocket.com/next-js-font-optimization/
const montserrat = Montserrat({
  display: 'block',
  subsets: ['latin'],
  variable: '--montserrat-font',
  weight: ['300', '400', '500', '600', '700'],
})
const ptMono = PT_Mono({
  display: 'block',
  subsets: ['latin'],
  variable: '--ptMono-font',
  weight: ['400'],
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
      <main className={`${montserrat.variable} ${ptMono.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
