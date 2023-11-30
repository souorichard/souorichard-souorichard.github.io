import Button from './Button'

export default function Home() {
  return (
    <section
      id="home"
      className="h-[800px] px-32 bg-900 bg-home bg-cover bg-bottom flex justify-between items-center"
    >
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold text-white">
            Hi, I&apos;m Richard Rodrigues
          </h1>
          <h2 className="text-4xl font-medium text-primary-500">
            Full-stack Developer & UI UX Designer
          </h2>
        </div>
        <p className="max-w-3xl text-lg text-white text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nihil
          eum. Sint magni aspernatur harum quasi doloremque quos! Consequuntur
          doloremque molestias voluptatum sequi provident doloribus, quisquam
          fugiat laudantium eos quam!
        </p>
        <div className="flex items-center gap-10">
          <Button className="w-[200px] h-12">Hire me</Button>
          <Button className="w-[200px] h-12">Let&apos;s talk</Button>
        </div>
      </div>
      <div className="w-[550px] h-[550px] rounded-full bg-my-photo bg-cover bg-center shadow-2xl shadow-black/25" />
    </section>
  )
}
