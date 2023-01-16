import Image from 'next/image';
import Link from 'next/link';

export function GitHubStarButton() {
  return (
    <Link href="https://github.com/useVenice/venice" target="_blank">
      <div className="flex justify-between w-20 h-8 bg-github-gray border-solid border-2 border-venice-inner-bevel rounded-lg">
        <Image src='/assets/github-logo-black.svg' alt='Github Logo' width={22} height={22} className="ml-2" />
        <div className="mt-1 mr-3 montserrat-medium-13px text-venice-black">Star</div>
      </div>
    </Link>
  );
}