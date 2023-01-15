import Image from 'next/image';
import { GitHubStarButton } from './GitHubStarButton';

export function Navigation() {
    return (
        <div className="mt-12 flex justify-between">
            <Image src='/assets/venice-logo.svg' alt='Venice Logo' width={102} height={32} />
            <GitHubStarButton />
        </div>
    );
}