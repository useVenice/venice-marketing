import { Container } from "@/components/Container"
import { GlowingButton } from "@/components/GlowingButton"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import { ReactFragment } from "react"

export default function VeniceLandingPage() {
  return (
    <>
      <Container>
        <Navigation />
        <HeroSection />
        <SyncInPipeOutSection />
        <GiveYourselfSuperpowersSection />
        <ValuePropositionsSection />
      </Container>
      <Footer />
    </>
  )
}

/* Hero */

function HeroSection() {
  return (
    <div className="mt-20">
      <div className="flex">
        <h1 className="font-montserrat font-bold text-3xl md:text-6xl leading-tight min-w-[234px]">
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
      <>
        <p className="font-sans font-light text-lg md:text-2xl text-venice-offwhite mt-10">
          Save weeks with the open-source data infrastructure trusted by data analysts, personal finance geeks, and developers to unify & access their finances in the most powerful & flexible ways.
        </p>
      </>
      <div className="grid grid-cols-1">
        <GlowingButton className="place-self-center mt-10" link="/early-access/survey" text="GET EARLY ACCESS" />
      </div>
    </div>
  )
}

/* Sync in, pipe out */

function SyncInPipeOutSection() {
  return (
    <div className="mt-14 grid grid-cols-1">
      <Image src="/assets/sync-in-pipe-out.svg" alt="Sync banks to Venice's unified database" className="place-self-center" width={363} height={407} />
      <div className="place-self-center max-w-lg mt-2 grid grid-cols-1">
        <p className="mt-6 font-sans font-medium text-lg md:text-2xl text-venice-green">Venice is your unified financial database.</p>
        <p className="font-sans font-light text-md md:text-lg text-venice-offwhite">
          Continuously sync data from over 10,000 financial institutions & multiple data providers in minutes, saving yourself hours of manual input & expensive copy/paste mistakes.
        </p>
      </div>
    </div>
  )
}

/* Superpowers */

function GiveYourselfSuperpowersSection() {
  return (
    <div className="mt-14 grid grid-cols-1">
      <h1 className="font-sans font-bold text-3xl md:text-5xl text-venice-offwhite leading-tight min-w-[234px]">
        Give yourself<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;superpowers
      </h1>
      <div className="grid grid-cols-2 mx-10 md:mx-20 mt-6">
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
        <span className="font-sans font-bold text-sm md:text-base text-venice-offwhite">{name}</span>
        <span className="font-sans font-light text-sm md:text-base text-venice-offwhite">{text}</span>
      </p>
    </div>
  )
}

/* Value propositions */

function ValuePropositionsSection() {
  return (
    <div className="mt-14 mx-auto max-w-screen-sm">
      <ValuePropDashboards />
      <ValuePropGoogleSheetsOrCSV />
      <ValuePropHeadlessDatabase />
      <ValuePropCustomizeAndExtend />
    </div>
  )
}
type ValuePropositionProps = {
  headerFragment: any;
  valueImagePath: string;
  valueImageAltText: string;
  valueText: string;
  valueCode?: string;
}
function ValueProposition(props: ValuePropositionProps) {
  const { headerFragment, valueImagePath, valueImageAltText, valueText, valueCode } = props;
  return (
    <div className="mt-10">
      <div className="font-sans font-medium text-xl text-venice-offwhite">
        {headerFragment}
      </div>
      <div className="flex">
        <Image className="mt-2" src={valueImagePath} alt={valueImageAltText} width={106} height={36} />
        <div className="ml-4 mt-2">
          <p className="font-sans font-light text-venice-offwhite mt-2">{valueText}</p>
          <p className="font-ptMono text-sm text-venice-gray mt-2">{valueCode}</p>
        </div>
      </div>
    </div>
  )
}
function ValuePropDashboards() {
  return (
    <ValueProposition headerFragment={
      <>
        <span>Connect to </span>
        <span className="text-venice-green">Dashboards</span>
        <span> & </span>
        <span className="text-venice-green">Charting</span>
        <span> tools</span>
      </>
    }
      valueImagePath="/assets/veniceToDashboards.svg"
      valueImageAltText="Connect Venice to your favorite dashboard or charting tool"
      valueText="Build custom queries and connect to your favorite dashboard tools to visualize your financial data in new and powerful ways." />
  )
}
function ValuePropGoogleSheetsOrCSV() {
  return (
    <ValueProposition headerFragment={
      <p>
        <span>Access from  </span>
        <span className="text-venice-green">Google Sheets</span>
        <span> or via </span>
        <span className="text-venice-green">CSV</span>
      </p>
    }
      valueImagePath="/assets/veniceToCSV.svg"
      valueImageAltText="Access Venice's unified data from Google Sheets or via CSV"
      valueText="Export your data automatically or via CSV."
      valueCode="=IMPORTDATA(“venice.is/csv?query=select date, amount from transaction”)" />
  )
}
function ValuePropHeadlessDatabase() {
  return (
    <ValueProposition headerFragment={
      <p>
        <span className="text-venice-green">Headless database</span>
        <span> for apps & scripts</span>
      </p>
    }
      valueImagePath="/assets/veniceToApps.svg"
      valueImageAltText="Venice can be used as a headless database for your apps or scripts"
      valueText="Build internal tools & scripts using Venice’s unified database to do the data aggregation work for you." />
  )
}
function ValuePropCustomizeAndExtend() {
  return (
    <ValueProposition headerFragment={
      <p>
        <span className="text-venice-green">Customize</span>
        <span> and </span>
        <span className="text-venice-green">extend</span>
      </p>
    }
      valueImagePath="/assets/veniceToGithub.svg"
      valueImageAltText="Join Venice's open source community"
      valueText="Data source not supported? Teach Venice new things, or customize existing integrations." />
  )
}
