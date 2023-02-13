import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="bg-footerBlack h-40 mt-20 sticky top-[100vh] w-screen">
      <div className="container md:py-14 p-8 max-w-screen-lg">
        <div className="flex justify-between">
          <Link href="/">
            <Image src="/assets/venice-logo-offwhite.svg" alt="Venice Logo" width={102} height={32} />
          </Link>
          <div className="flex justify-between gap-10 mt-2">
            <Link className="mt-[2px]" href="mailto:hello@venice.is" target="_blank">
              <Image src="/assets/icon-send-email.svg" alt="Email us" width={20} height={15} />
            </Link>
            <Link href="https://github.com/useVenice/venice" target="_blank">
              <Image src="/assets/icon-github.svg" alt="Star Venice on GitHub" width={20} height={20} />
            </Link>
            <Link href="https://discord.gg/gTMch6Gn2u" target="_blank">
              <Image src="/assets/icon-discord.svg" alt="Join our Discord" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
