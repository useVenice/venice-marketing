import { Container } from "@/components/Container"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { GlowingButton } from "@/components/GlowingButton"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function ThanksForApplying() {
  return (
    <div className="min-h-[95vh]">
      <Head><title>Venice - Thank you!</title></Head>
      <Navigation />
      <Container>
        <div className="mt-14 grid grid-cols-1">
          <Image src="/assets/rocket-takeoff.svg" alt="Thank you!" className="place-self-center" width={80} height={80} />
          <div className="place-self-center max-w-lg mt-2 grid grid-cols-1">
            <p className="text-center mt-6 font-sans font-medium text-md md:text-2xl text-venice-green">We’ll be in touch soon!</p>
            <p className="text-center mt-6 font-sans font-light text-sm md:text-lg text-venice-offwhite">
              Available invites to Venice are going fast!
              <br /><br />
              Priority will be given to people on Venice’s Discord
              & those helping on Venice’s open source project!
            </p>
          </div>
          <div className="place-self-center flex gap-10 mt-6">
            <Link href="https://github.com/useVenice/venice" target="_blank">
              <Image src='/assets/icon-github.svg' alt='Star Venice on GitHub' width={50} height={50} />
            </Link>
            <Link href="https://discord.gg/gTMch6Gn2u" target="_blank">
              <Image src='/assets/icon-discord.svg' alt='Join our Discord' width={50} height={50} />
            </Link>
          </div>
          <div className="grid grid-cols-1 mt-10">
            <GlowingButton className="place-self-center" link="/" icon="/assets/icon-rocket.svg" text="LEARN MORE" />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}