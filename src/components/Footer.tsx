import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <div className="bg-venice-footer-black h-40 mt-20 sticky top-[100vh]">
            <div className="container p-14 max-w-screen-md">
                <div className="flex justify-between">
                    <Image src='/assets/venice-logo.svg' alt='Venice Logo' width={102} height={32} />
                    <div className="flex justify-between gap-10 mt-2">
                        <Link href="mailto:hello@venice.is" target="_blank">
                            <Image src='/assets/icon-send-email.svg' alt='Email us' width={20} height={20} />
                        </Link>
                        <Link href="https://github.com/useVenice/venice" target="_blank">
                            <Image src='/assets/icon-github.svg' alt='Star Venice on GitHub' width={20} height={20} />
                        </Link>
                        <Link href="https://discord.gg/gTMch6Gn2u" target="_blank">
                            <Image src='/assets/icon-discord.svg' alt='Join our Discord' width={20} height={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}