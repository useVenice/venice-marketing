import Image from 'next/image'
import Link from 'next/link'

import {GitHubStarButton} from './GitHubStarButton'

export function Navigation() {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-6 md:mt-12 pl-4 pr-2 md:px-20 flex justify-between">
      <Link href="/">
        <Image src="/assets/venice-logo-offwhite.svg" alt="Venice Logo" width={102} height={32} />
      </Link>
      <GitHubStarButton />
    </div>
  )
}
