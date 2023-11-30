import Link from 'next/link'
import { ElementType, ReactNode } from 'react'

type ActiveLinkProps = {
  href: string
  icon: ElementType
  children: ReactNode
}

export default function ActiveLink({
  href,
  icon: Icon,
  children
}: ActiveLinkProps) {
  return (
    <Link
      href={href}
      className="flex justify-center items-center transition-all text-white hover:text-zinc-300 active:text-zinc-400"
    >
      <Icon className="text-xl" />
      <span className="ml-2 text-sm">{children}</span>
    </Link>
  )
}
