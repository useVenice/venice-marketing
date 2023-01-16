import Image from 'next/image';
import { GitHubStarButton } from './GitHubStarButton';

export function Navigation() {
    return (
        <div className="max-w-screen-lg mx-auto mt-12 pl-4 pr-2 md:px-20 flex justify-between">
            <Image src='/assets/venice-logo.svg' alt='Venice Logo' width={102} height={32} />
            <GitHubStarButton />
        </div>
    );
}