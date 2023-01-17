import { Container } from "@/components/Container"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { GlowingButton } from "@/components/GlowingButton"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';

interface EarlyAccessSurveyData {
  intendedUse: string;
  badAlternative: string;
}

export default function EarlyAccessSurvey() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<EarlyAccessSurveyData>();
  const textClasses = "max-w-[300px] min-w-[200px] w-full mt-2 resize-none text-sm font-sans focus:ring-0 rounded-lg caret-venice-green text-venice-white bg-venice-input-background border border-venice-input-border focus:border-venice-green"
  const labelClasses = "text-center font-sans text-venice-offwhite text-md pt-2"
  console.log(errors);

  const onSubmit = (data: EarlyAccessSurveyData) => {
    router.push('/early-access/apply')
    console.log(JSON.stringify(data))
  };

  return (
    <div className="min-h-[95vh]">
      <Navigation />
      <Container>
        <div className="mt-20 min-w-[200px]">
          <form className="grid grid-cols-1" onSubmit={handleSubmit(onSubmit)}>
            <label className={labelClasses}>
              What are you hoping to use Venice for?
              <br />
              <textarea className={textClasses} placeholder="answer" {...register("intendedUse", { required: true })} />
            </label>
            <br />
            <label className={labelClasses}>
              What are you currently using or doing<br />that’s not working for you?
              <br />
              <textarea className={textClasses} placeholder="answer" {...register("badAlternative", { required: true })} />
            </label>
            <GlowingButton className="place-self-center mt-10" link="/early-access/apply" text="ONE MORE STEP" isSubmit={true} />
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  )
}