'use client'

import ActiveLink from './ActiveLink'
import Logo from './Logo'

import { links } from '@/mocks/data'

export default function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full h-12 px-32 flex justify-between items-center bg-500 z-10"
    >
      <Logo />
      <div className="flex justify-center items-center gap-10">
        {links.map((link) => (
          <ActiveLink key={link.id} href={link.path} icon={link.icon}>
            {link.title}
          </ActiveLink>
        ))}
      </div>
    </header>
  )
}
