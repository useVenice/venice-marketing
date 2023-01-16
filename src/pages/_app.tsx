import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat, PT_Mono } from '@next/font/google'

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
  return (
    <>
      <main className={`${montserrat.variable} ${ptMono.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
