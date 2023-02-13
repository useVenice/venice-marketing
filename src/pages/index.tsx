import GitHubLogoBlack from '@/components/assets/GitHubLogoBlack'
import VeniceLogoBlack from '@/components/assets/VeniceLogoBlack'
import {Container} from '@/components/Container'
import {Footer} from '@/components/Footer'
import {GlowingButton} from '@/components/GlowingButton'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function VeniceLandingPage() {
  return (
    <div className="font-sans gap-8 inline-flex flex-col items-center bg-black-800 overflow-clip w-screen h-screen">
      <Head>
        <title>Venice - Financial data, for developers.</title>
      </Head>
      <HeroSection />
      <div className="px-4 max-w-screen-xl min-w-[320px]">
        <LandingPageCards />
        <Footer />
      </div>
    </div>
  )
}

/* Hero */

function HeroSection() {
  return (
    <>
      <div className="z-0 h-[487px] min-h-[487px] min-w-[320px] w-screen flex justify-center items-center">
        <div
          className="w-screen h-full text-left bg-gradient-to-r from-green to-yellow object-cover"
          style={{
            maskImage: 'url(/assets/hero-mask.png)',
            maskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: 'url(/assets/hero-mask.png)',
            WebkitMaskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
          }}>
          <div className="bg-repeat-x bg-bottom w-full h-full" style={{backgroundImage: 'url("/assets/hero-dots.svg")'}}>
            <HeroNavAndText />
          </div>
        </div>
      </div>
      <HeroCallToActionButton />
    </>
  )
}

function HeroNavAndText() {
  return (
    <Container>
      <div className="mt-12 gap-8 flex flex-col justify-center items-start">
        <HeroNavigation />
        <div className="gap-6 flex flex-col items-start md:mx-20">
          <div className="font-extrabold">
            <div className="text-4xl md:text-5xl text-black">
              <p className="inline leading-none">Frictionless</p>
              <br />
              <p className="inline text-offwhite bg-black rounded-lg py-0 px-2 leading-snug">financial data</p>
              <br />
              <p className="inline leading-none">for developers</p>
            </div>
          </div>
          <p className="text-base font-semibold leading-6 text-black-500">
            Build in a weekend, and let us do the heavy lifting. Your customers will thank you.
          </p>
        </div>
      </div>
    </Container>
  )
}

function HeroNavigation() {
  return (
    <div className="w-full flex items-center justify-between">
      <VeniceLogoBlack />
      <Link href="https://github.com/useVenice/venice" target="_blank">
        <GitHubLogoBlack />
      </Link>
    </div>
  )
}

function HeroCallToActionButton() {
  return (
    <div className="z-20 -mt-[9.4rem] w-full text-white gap-6 flex flex-col justify-center items-center self-stretch">
      <div className="bg-gradient-to-r p-[1px] from-green to-yellow rounded-lg shadow-lg shadow-green">
        <GlowingButton
          className="z-20 place-self-center"
          color="bg-black"
          borderColor="border-transparent"
          glowColor=""
          link="/early-access/apply"
          icon="/assets/icon-rocket.svg"
          text="GET EARLY ACCESS"
        />
      </div>
    </div>
  )
}

/* Landing Page Card */

function LandingPageCards() {
  return (
    <div className="mt-20 w-full flex items-start self-stretch">
      <CardLaunchFaster />
    </div>
  )
}

type LandingPageCardProps = {
  title: string
  largeText: string
  body: React.ReactNode
  imageName: string
  imageAlt: string
}
function LandingPageCard(props: LandingPageCardProps) {
  return (
    <div className="gap-40 flex flex-col items-start flex-grow">
      <div className="gap-4 md:mx-10 flex flex-col items-start self-stretch md:flex-row md:flex-no-wrap">
        <div className="w-full md:w-1/3 md:ml-20 gap-2 md:gap-4 flex flex-col items-start justify-center self-stretch text-left">
          <p className="bg-gradient-to-r from-green to-yellow bg-clip-text text-transparent w-full text-xs md:text-sm font-extrabold tracking-widest uppercase leading-normal">
            {props.title}
          </p>
          <p className="font-extrabold text-3xl md:text-5xl text-offwhite">{props.largeText}</p>
          <div className="font-normal leading-5 m-0 text-sm md:text-base text-grayText">{props.body}</div>
        </div>
        <div className="w-full items-center md:w-2/3 flex flex-col">
          <Image src={`/assets/${props.imageName}.png`} alt={props.imageAlt} width={397} height={387} />
        </div>
      </div>
    </div>
  )
}

function CardLaunchFaster() {
  return (
    <LandingPageCard
      title="unified data & api"
      largeText="Launch faster."
      body={
        <p>
          Let us do the hard work of piping data in & normalizing it into a unified API. Don&apos;t worry about transforming schemas, or scheduling cron jobs,
          or infrastructure, or security.
          <br />
          <br />
          Let us be the backend so you can build the future faster.
        </p>
      }
      imageName="card-elt-pipelines"
      imageAlt="Venice ingests, normalizes, and unifies data into a single API"
    />
  )
}
