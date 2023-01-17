import { Container } from "@/components/Container"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { GlowingButton } from "@/components/GlowingButton"

export default function EarlyAccessSurvey() {
  return (
    <div className="min-h-[95vh]">
      <Navigation />
      <Container>
        <div className="grid grid-cols-1">
          <GlowingButton className="place-self-center mt-10" link="/early-access/apply" text="ONE MORE STEP" />
        </div>
      </Container>
      <Footer />
    </div>
  )
}