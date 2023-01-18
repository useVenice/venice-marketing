import React, { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type GlowingButtonProps = {
  link?: any;
  color?: string;
  glowColor?: string;
  text: string;
  displayArrow?: Boolean;
  isSubmit?: Boolean;
  className?: string;
}

const defaultProps = {
  color: "bg-venice-green",
  glowColor: "shadow-venice-green-glow",
  displayArrow: true,
  isSubmit: false,
}

export function GlowingButton(props: GlowingButtonProps) {
  props = { ...defaultProps, ...props }
  const button = glowingButton(props);

  if (props.isSubmit) {
    return (
      <div className={props.className}>
        {button}
     </div>
    )
  } else {
    return (
      <Link href={props.link} className={props.className}>
        {button}
      </Link>
    )
  }
}

function glowingButton(props: GlowingButtonProps) {
  let arrow = props.displayArrow ? <Image src='/assets/arrow-right-white.svg' alt='Right arrow' width={27} height={27} className="ml-2" /> : null;
  return (
    <button type={props.isSubmit ? "submit" : undefined} className={`flex py-2 ${props.displayArrow ? 'pl-4 pr-2' : 'px-4'} border border-venice-inner-bevel rounded-lg ${props.color} shadow-lg ${props.glowColor}`}>
      <span className="mt-1 font-sans text-[13px] text-venice-white">{props.text}</span>
      {arrow}
    </button>
  )
}
