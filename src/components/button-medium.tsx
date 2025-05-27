import clsx from 'clsx'
import React from 'react'
import { Button } from './button'
import { ArrowCircleRightIcon } from './icons/arrow-circle-right'

interface ButtonMediumProps {
  className?: string
  children?: React.ReactNode
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
}

const ButtonMedium = ({ className = '', children, icon, ...props }: ButtonMediumProps) => {
  return (
    <Button
      outline
      className={clsx(
        'w-[200px] w-full max-w-xs cursor-pointer border border-white bg-white py-5 font-medium tracking-wide sm:py-6',
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-12 sm:w-12">
        {icon ? icon : <ArrowCircleRightIcon className="h-full w-full" />}
      </div>
    </Button>
  )
}

export default ButtonMedium
