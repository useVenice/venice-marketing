import { Container } from "@/components/Container"
import { GlowingButton } from "@/components/GlowingButton"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Head from "next/head"

export default function VeniceLandingPage() {
  return (
    <>
      <Head><title>Venice - Financial data, for developers.</title></Head>
      <Navigation />
      <Container>
        <HeroSection />

      </Container>
      <Footer />
    </>
  )
}

/* Hero */

function HeroSection() {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="flex justify-between">
        <div className="font-inter font-bold text-3xl md:text-5xl lg:text-6xl leading-tight min-w-[220px]">
          <span className="text-venice-green">Unified </span><br />
          <span className="text-venice-offwhite">access to </span><br />
          <span className="text-venice-green">financial data</span>
          <div className="min-w-[220px] min-h-[23px] max-h-[23px] relative h-auto pr-2 md:mt-2">
            <Image fill src="/assets/hero-underline.svg" alt="Underline" style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
        <Image className="md:pl-2 mr-4 mb-4" src="/assets/unified-db-flow.svg" alt="Venice is the backend for finance" width={312} height={208} />
      </div>
      <>
        <p className="font-sans font-light text-lg md:text-2xl text-venice-offwhite mt-4 lg:mt-10">
          Save weeks with the open-source data infrastructure trusted by data analysts, personal finance geeks, and developers to unify & access their finances in the most powerful & flexible ways.
        </p>
      </>
      <div className="grid grid-cols-1 mt-10">
        <GlowingButton className="place-self-center" link="/early-access/apply" icon="/assets/icon-rocket.svg" text="GET EARLY ACCESS" />
      </div>
    </div>
  )
}