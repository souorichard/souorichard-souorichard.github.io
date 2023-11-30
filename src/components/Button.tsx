import { ButtonHTMLAttributes, ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const btn = tv({
  base: 'w-fit px-5 py-2 rounded-md transition-all font-semibold shadow-xl shadow-black/25',
  variants: {
    fill: {
      default:
        'bg-primary-400 hover:bg-primary-300 active:bg-primary-500 disabled:bg-primary-800 text-primary-950 disabled:text-primary-200'
    },
    text: {
      default: 'text-lg'
    }
  },
  defaultVariants: {
    fill: 'default',
    text: 'default'
  }
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof btn> & {
    children: ReactNode
  }

export default function Button({
  fill,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={btn({ fill, className })} {...props}>
      {children}
    </button>
  )
}
