import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'

type CardProps = {
  name: string
  description?: string
  path: string
}

export default function ProjectCard({ name, description, path }: CardProps) {
  return (
    <div className="w-full h-[340px] flex flex-col items-center shadow-xl sahdow-black/50">
      <div className="w-full h-3/4 bg-700 rounded-t-md"></div>
      <div className="w-full h-1/4 px-6 flex justify-between items-center bg-500 rounded-b-md">
        <div className="flex flex-col">
          <h4 className="text-xl text-white">{name}</h4>
          {description && (
            <p className="text-sm text-zinc-400">{description}</p>
          )}
        </div>
        <Link
          href={path}
          target="_blank"
          className="w-10 h-10 flex justify-center items-center border-2 border-primary-400 hover:border-primary-300 active:border-primary-500 rounded-full transition-all text-primary-400 hover:text-primary-300 active:text-primary-500"
        >
          <LuArrowUpRight className="text-2xl" />
        </Link>
      </div>
    </div>
  )
}
