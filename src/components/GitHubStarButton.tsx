import Image from 'next/image'
import Link from 'next/link'

export function GitHubStarButton() {
  return (
    <Link href="https://github.com/useVenice/venice" target="_blank">
      <div className="flex justify-between w-20 h-8 bg-githubGray border-solid border-2 border-inner-bevel rounded-lg">
        <Image src="/assets/github-logo-black.svg" alt="Github Logo" width={22} height={22} className="ml-2" />
        <div className="mt-[5px] ml-2 mr-3 font-sans font-bold text-[13px] text-black">Star</div>
      </div>
    </Link>
  )
}
