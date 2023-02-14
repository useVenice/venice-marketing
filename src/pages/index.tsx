import BulletPoint from '@/components/assets/BulletPoint'
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
    <div className="font-sans gap-8 inline-flex flex-col items-center bg-black-800 overflow-clip w-screen">
      <Head>
        <title>Venice - Financial data, for developers.</title>
      </Head>
      <HeroSection />
      <div className="px-4 max-w-screen-xl min-w-[320px]">
        <LandingPageCards />
      </div>
      <Footer />
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
          <p className="font-semibold leading-6 text-black-500">Build in a weekend, and let us do the heavy lifting. Your customers will thank you.</p>
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
    <div className="z-20 -mt-[9.4rem] md:-mt-16 w-full text-white gap-6 flex flex-col justify-center items-center self-stretch">
      <GetEarlyAccessButton />
    </div>
  )
}

function GetEarlyAccessButton() {
  return (
    <div className="bg-gradient-to-r p-[1px] from-green to-yellow rounded-lg shadow-lg shadow-venice-green-glow">
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
  )
}

/* Landing Page Card */

function LandingPageCards() {
  return (
    <div className="mt-20 w-full h-full min-h-full flex flex-col flex-wrap gap-40">
      <CardHostedPlaid />
      <CardLaunchFaster />
      <CardUseCases />
      <CardReinventingTheWheel />
      <CardPoweredByOpenSource />
      <CardTimeIsMoney />
      <CardJoinOurCommunity />
    </div>
  )
}

type LandingPageCardProps = {
  title: string
  largeText: string
  body: React.ReactNode
  imageName?: string
  imageAlt?: string
}
function LandingPageCard(props: LandingPageCardProps) {
  if (props.imageName && props.imageAlt) {
    return (
      <div className="flex flex-col">
        <div className="gap-4 md:mx-10 flex flex-col items-start self-stretch md:flex-row md:flex-no-wrap">
          <div className="w-full md:w-1/2 md:ml-20 gap-2 md:gap-4 flex flex-col items-start justify-center self-stretch text-left">
            <p className="bg-gradient-to-r from-green to-yellow bg-clip-text text-transparent text-xs md:text-sm font-extrabold tracking-widest uppercase leading-normal">
              {props.title}
            </p>
            <p className="font-extrabold text-3xl md:text-5xl text-offwhite">{props.largeText}</p>
            <div className="font-normal leading-5 m-0 text-base text-grayText">{props.body}</div>
          </div>
          <div className="w-full items-center md:w-1/2 mt-4 md:mt-0 flex flex-col">
            <Image src={`/assets/${props.imageName}.png`} alt={props.imageAlt} width={397} height={387} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="max-w-screen-md mx-auto flex flex-col">
        <div className="gap-4 md:mx-10 flex flex-col items-start self-stretch md:flex-row md:flex-no-wrap">
          <div className="w-full md:ml-20 gap-2 md:gap-4 flex flex-col items-start justify-center self-stretch text-left">
            <p className="bg-gradient-to-r from-green to-yellow bg-clip-text text-transparent text-xs md:text-sm font-extrabold tracking-widest uppercase leading-normal">
              {props.title}
            </p>
            <p className="font-extrabold text-3xl md:text-5xl text-offwhite">{props.largeText}</p>
            <div className="mt-2 w-full font-normal leading-5 m-0 text-base text-grayText">{props.body}</div>
          </div>
        </div>
      </div>
    )
  }
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

function CardUseCases() {
  return (
    <LandingPageCard
      title="12,000+ data sources"
      largeText="A billion possibilities."
      body={
        <>
          <p>
            How will <span className="italic">you</span> change the world using Venice?
          </p>
          <br />
          <div className="flex flex-col gap-2">
            <GreenBulletPoint greenText="Developers" whiteText="use Venice as a unified financial database for their teams & products" />
            <GreenBulletPoint
              greenText="Companies"
              whiteText="use Venice to make data-driven decisions about their small-business customers & underwrite risk"
            />
            <GreenBulletPoint greenText="Data analysts" whiteText="use Venice to consolidate revenue & reporting into a single source of truth" />
            <GreenBulletPoint greenText="Personal finance geeks" whiteText="use Venice to keep their spreadsheets up-to-date & build wealth faster" />
            <GreenBulletPoint greenText="Finance teams" whiteText="use Venice to remove hours of manual data updates & avoid costly mistakes" />
          </div>
        </>
      }
      imageName="card-use-cases"
      imageAlt="Venice gives you superpowers"
    />
  )
}

type GreenBulletPointProps = {
  greenText: string
  whiteText: string
}
function GreenBulletPoint(props: GreenBulletPointProps) {
  return (
    <div className="flex gap-2">
      <BulletPoint />
      <div className="w-full text-base leading-normal">
        <p className="inline bg-gradient-to-r from-green to-yellow bg-clip-text text-transparent font-bold">{props.greenText}</p>
        <p className="inline"> {props.whiteText}</p>
      </div>
    </div>
  )
}

function CardReinventingTheWheel() {
  return (
    <LandingPageCard
      title="backend as a service"
      largeText="Stop reinventing the wheel."
      body={
        <p>
          Every fintech company <span className="text-red">unintentionally</span> builds a data engineering company.
          <br />
          <br />
          Spend your time creating value for your business and your customers instead of adding months of extra work & risk onto your roadmap.
        </p>
      }
      imageName="card-launch-rocket"
      imageAlt="Let us do the heavy lifting, so you can focus on launching"
    />
  )
}

function CardPoweredByOpenSource() {
  return (
    <LandingPageCard
      title="bring your own data source"
      largeText="Powered by open source infrastructure."
      body={
        <>
          <p>
            Our community of open source developers believes in a world where financial data moves effortlessly from A to B, with the least amount of code
            required.
          </p>
          <br />
          <div className="flex flex-col gap-2">
            <GreenBulletPoint greenText="Customize" whiteText="existing integrations, standing on the shoulders of giants who helped pave the way" />
            <GreenBulletPoint
              greenText="Extend"
              whiteText="Venice by easily building new data pipelines that the whole community benefits from, seamlessly integrated into Venice's infrastructure"
            />
            <GreenBulletPoint greenText="Control" whiteText="how often Venice syncs data to save on cost or complexity" />
            <GreenBulletPoint
              greenText="Protect"
              whiteText="your customer data by self-hosting Venice on-premise if needed and choosing where data is streamed into"
            />
          </div>
        </>
      }
      imageName="card-open-source"
      imageAlt="Venice is powered by the open source community"
    />
  )
}

function CardHostedPlaid() {
  return (
    <LandingPageCard
      title="hosted plaid integration"
      largeText="The power of Plaid, without the hassle."
      body={
        <p>
          Connect to more than 12,000 financial institutions across the US, Canada, and Europe—powered by Plaid.
          <br />
          <br />
          Let us handle the infrastructure, streaming, schema transformations, API upgrades, webhook callbacks, and maintenance headaches.
          <br />
          <br />
          As your needs expand beyond banking, Venice&apos;s unified API ensures you never need to learn more than one data schema, regardless of how many data
          sources you connect to.
        </p>
      }
      imageName="card-plaid-as-a-service"
      imageAlt="Get Plaid data in minutes, with zero setup"
    />
  )
}

function CardTimeIsMoney() {
  return (
    <LandingPageCard
      title="time is money"
      largeText="Let's save you plenty of both."
      body={
        <div className="w-full gap-6 flex flex-col justify-center items-center self-stretch">
          <GetEarlyAccessButton />
        </div>
      }
    />
  )
}

function CardJoinOurCommunity() {
  return (
    <LandingPageCard
      title="a community of founders & builders"
      largeText="Go farther together & build tomorrow, today."
      body={
        <div className="w-full gap-6 flex flex-col justify-center items-center self-stretch">
          <p>
            Venice is building a movement, powered by fintech founders & builders who believe anyone can build the future—and that we can go faster and farther
            when we work together as a community.
          </p>
          <JoinOurDiscordButton />
        </div>
      }
    />
  )
}

function JoinOurDiscordButton() {
  return (
    <div className="bg-gradient-to-r p-[1px] from-discordPurpleLight to-discordPurpleDark rounded-lg shadow-lg shadow-discord-purple-glow">
      <GlowingButton
        className="z-20 place-self-center"
        color="bg-black"
        borderColor="border-transparent"
        glowColor=""
        link="https://discord.gg/gTMch6Gn2u"
        icon="/assets/icon-discord.svg"
        text="JOIN OUR DISCORD"
      />
    </div>
  )
}
