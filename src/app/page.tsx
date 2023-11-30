import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Projects from '@/components/Projects'

export default function HomePage() {
  return (
    <div className="min-h-screen mt-12 flex flex-col">
      <Home />
      <Projects />
      <Contact />
    </div>
  )
}
