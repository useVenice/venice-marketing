import { Container } from "@/components/Container"
import { GlowingButton } from "@/components/GlowingButton"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Image from "next/image"

export default function VeniceLandingPage() {
  return (
    <>
      <Container>
        <Navigation />
        <HeroSection />
        <SyncInPipeOutSection />
        <GiveYourselfSuperpowersSection />
      </Container>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <div className="mt-20">
      <div className="flex">
        <h1 className="text-lg md:text-2xl leading-tight min-w-[234px]">
          <span className="text-venice-offwhite">Instant </span>
          <span className="text-venice-green">SQL </span><br />
          <span className="text-venice-offwhite">access to your </span><br />
          <span className="text-venice-green">financial data</span>
          <div className="flex min-w-[240px] min-h-[23px] max-h-[30px] relative h-auto">
            <Image fill src="/assets/hero-underline.svg" alt="Underline" style={{ height: "100%", width: "100%" }} />
          </div>
        </h1>
        <Image className="ml-10 md:ml-40 mb-8" src="/assets/sql-search.svg" alt="SQL search built in" width={244} height={144} />
      </div>
      <div>
        <p className="montserrat-light-17px text-venice-offwhite mt-10">
          Save weeks with the open-source data infrastructure trusted by data analysts, personal finance geeks, and developers to unify & access their finances in the most powerful & flexible ways.
        </p>
      </div>
      <div className="grid grid-cols-1">
        <GlowingButton className="place-self-center mt-10" link="/early-access/survey" text="GET EARLY ACCESS" />
      </div>
    </div>
  )
}

function SyncInPipeOutSection() {
  return (
    <div className="mt-14 grid grid-cols-1">
      <Image src="/assets/sync-in-pipe-out.svg" alt="Sync banks to Venice's unified database" className="place-self-center" width={363} height={407} />
      <div className="mt-14 grid grid-cols-1">
        <p className="mt-6 place-self-center montserrat-medium-17px text-venice-green">Venice is your unified financial database.</p>
        <p className="max-w-lg place-self-center montserrat-light-15px text-venice-offwhite">
          Continuously sync data from over 10,000 financial institutions & multiple data providers in minutes, saving yourself hours of manual input & expensive copy/paste mistakes.
        </p>
      </div>
    </div>
  )
}

function GiveYourselfSuperpowersSection() {
  return (
    <div className="mt-14 grid grid-cols-1">
      <h1 className="text-lg md:text-2xl text-venice-offwhite leading-tight min-w-[234px]">
        Give yourself<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;superpowers
      </h1>
      <div className="grid grid-cols-2 mx-10 md:mx-20">
        <PersonaFragment imagePath="/assets/persona-developer.svg" name="Developers" text=" use Venice as a unified financial database for their teams & products" />
        <PersonaFragment imagePath="/assets/persona-analysts.svg" name="Data analysts" text=" use Venice to consolidate revenue & reporting into a unified database" />
        <PersonaFragment imagePath="/assets/persona-geeks.svg" name="Personal finance geeks" text=" use Venice to keep their spreadsheets up-to-date & build wealth faster" />
        <PersonaFragment imagePath="/assets/persona-finance-teams.svg" name="Finance teams" text=" use Venice to remove hours of manual data updates & avoid costly mistakes" />
      </div>
    </div>
  )
}

type PersonaProps = {
  imagePath: string;
  name: string;
  text: string;
}
function PersonaFragment(props: PersonaProps) {
  const { imagePath, name, text } = props;
  return (
    <div className="mx-4">
      <Image className="mx-auto mt-6" src={imagePath} alt={name} width={75} height={75} />
      <p className="text-center mt-2">
        <span className="montserrat-bold-13px text-venice-offwhite">{name}</span>
        <span className="montserrat-light-13px text-venice-offwhite">{text}</span>
      </p>
    </div>
  )
}