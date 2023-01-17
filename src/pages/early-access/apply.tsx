import { Container } from "@/components/Container"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    Tally: any;
  }
}

export default function ApplyForEarlyAccess() {
  useEffect(() => {
    if (window.Tally && window.Tally.loadEmbeds) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="min-h-[95vh]">
      <Script src="https://tally.so/widgets/embed.js"></Script>
      <Navigation />
      <Container>
        <div className="mt-20 min-w-[200px]">
          <p className="mt-6 font-sans font-medium text-md md:text-2xl text-venice-green">Apply for early access</p>
          <iframe data-tally-src="https://tally.so/embed/me58JQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height={523} frameBorder={0} marginHeight={0} marginWidth={0} title="Venice Waitlist" />
        </div>
      </Container>
      <Footer />
    </div>
  )
}