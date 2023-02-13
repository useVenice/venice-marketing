import Image from 'next/image'
import Link from 'next/link'
import React, {ButtonHTMLAttributes} from 'react'

export type GlowingButtonProps = {
  link?: any
  color?: string
  glowColor?: string
  borderColor?: string
  icon?: string
  text: string
  displayArrow?: Boolean
  isSubmit?: Boolean
  className?: string
}

const defaultProps = {
  color: 'bg-green',
  glowColor: 'shadow-venice-green-glow',
  borderColor: 'border-inner-bevel',
  displayArrow: true,
  isSubmit: false,
}

export function GlowingButton(props: GlowingButtonProps) {
  props = {...defaultProps, ...props}
  const button = glowingButton(props)

  if (props.isSubmit) {
    return <div className={props.className}>{button}</div>
  } else {
    return (
      <Link href={props.link} className={props.className}>
        {button}
      </Link>
    )
  }
}

function glowingButton(props: GlowingButtonProps) {
  let icon = props.icon ? <Image src={props.icon} alt="Icon" width={16} height={16} className="mr-3 py-1" /> : null
  let arrow = props.displayArrow ? <Image src="/assets/arrow-right-white.svg" alt="Right arrow" width={24} height={24} className="ml-2" /> : null
  return (
    <button
      type={props.isSubmit ? 'submit' : undefined}
      className={`flex py-1.5 ${props.displayArrow ? 'pl-3 pr-1' : 'px-2'} border ${props.borderColor} rounded-lg ${props.color} shadow-lg ${props.glowColor}`}>
      {icon}
      <span className="mt-[3px] font-sans text-[13px] text-white">{props.text}</span>
      {arrow}
    </button>
  )
}
