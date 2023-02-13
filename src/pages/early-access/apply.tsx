import {Container} from '@/components/Container'
import {Footer} from '@/components/Footer'
import {Navigation} from '@/components/Navigation'
import Head from 'next/head'
import {useEffect} from 'react'

declare global {
  interface Window {
    Tally: any
  }
}

export default function ApplyForEarlyAccess() {
  useEffect(() => {
    if (window.Tally && window.Tally.loadEmbeds) {
      window.Tally.loadEmbeds()
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Venice - Apply for early access</title>
      </Head>
      <Navigation />
      <div className="grow">
        <Container>
          <div className="mt-20 min-w-[200px]">
            <p className="mt-6 font-sans font-medium text-md md:text-2xl text-green">Apply for early access</p>
            <iframe
              data-tally-src="https://tally.so/embed/me58JQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height={523}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Venice Waitlist"
            />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
