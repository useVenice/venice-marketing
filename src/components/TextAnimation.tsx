import clsx from 'clsx'
import React, {useEffect, useState} from 'react'
import {CSSTransition} from 'react-transition-group'

interface TextAnimationProps {
  className?: string
  intervalMs: number
  textValues: string[]
}

export function TextAnimation(props: TextAnimationProps) {
  const {className, intervalMs, textValues} = props
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTextIndex((currentTextIndex + 1) % textValues.length)
    }, intervalMs)

    return () => clearTimeout(timer)
  }, [intervalMs, currentTextIndex, setCurrentTextIndex, textValues])

  return (
    <p className={clsx('text-animation-container', className)}>
      {textValues.map((text, i) => (
        <CSSTransition key={i} classNames="text-animation" in={i === currentTextIndex} timeout={360} unmountOnExit>
          <span className="text-animation">{text}</span>
        </CSSTransition>
      ))}
    </p>
  )
}
