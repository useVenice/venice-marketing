import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge'

export type GlowingButtonProps = {
  link?: any;
  color?: string;
  glowColor?: string;
  text: string;
  className?: string;
}

const defaultProps = {
  color: "venice-green",
  glowColor: "venice-green-glow"
}

export function GlowingButton(props: GlowingButtonProps) {
  props = { ...defaultProps, ...props }
  return (
    <Link href={props.link} className={props.className}>
      <button className={twMerge("bg-" + props.color, "shadow-lg shadow-" + props.glowColor, "flex py-2 pr-2 pl-4 border border-venice-inner-bevel rounded-lg")}> 
        <span className="mt-1 font-sans text-[13px] text-venice-white">{props.text}</span>
        <Image src='/assets/arrow-right-white.svg' alt='Right arrow' width={27} height={27} className="ml-2" />
      </button>
    </Link>
  );
}