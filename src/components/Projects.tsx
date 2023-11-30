import Link from 'next/link'

import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="h-[600px] px-32 py-20 bg-900">
      <div className="flex flex-col">
        <h3 className="text-3xl font-semibold text-white">Projects</h3>
        <div className="w-full h-1 mt-1 bg-gradient-to-r from-primary-500 to-bg-700 rounded-full" />
      </div>
      <div className="mt-14">
        <p className="text-lg text-white">
          Some projects I developed over time or{' '}
          <Link
            href="https://github.com/souorichard?tab=repositories"
            target="_blank"
            className="text-primary-400 hover:text-primary-300 active:text-primary-500 underline transition-all"
          >
            See all
          </Link>
        </p>
        <div className="mt-8 flex items-center gap-10">
          <ProjectCard
            name="Tailwind Spotify"
            path="https://github.com/souorichard/tailwind-spotify"
          />
          <ProjectCard
            name="Github Finder"
            path="https://github.com/souorichard/github-finder"
          />
          <ProjectCard
            name="In Decor"
            path="https://github.com/souorichard/in-decor"
          />
        </div>
      </div>
    </section>
  )
}
