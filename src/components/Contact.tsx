import Link from 'next/link'
import { LuGithub, LuInstagram, LuTwitter } from 'react-icons/lu'

import Button from './Button'
import Input from './Input'

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-[800px] mt-20 px-32 flex justify-center items-center bg-contact bg-cover bg-bottom"
    >
      <div className="w-1/2 h-3/4 p-12 flex flex-col bg-700 rounded-md shadow-2xl shadow-black/25">
        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold text-white">Contact Us</h3>
          {/* <div className="w-full h-1 mt-1 bg-gradient-to-r from-primary-500 to-bg-700 rounded-full" /> */}
        </div>
        <section className="w-full h-full mt-10 flex items-center gap-8">
          <form className="w-full h-full flex flex-col justify-center gap-4">
            <Input
              name="fullname"
              type="text"
              label="Full name"
              placeholder="Insert your full name"
            />
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Insert your email"
            />
            <Input label="Message" textarea />
            <Button className="w-full mt-4">Send</Button>
          </form>
          <div className="w-2 h-full rounded-full bg-500" />
          <div className="w-full h-full flex flex-col justify-center gap-12">
            <div className="flex flex-col">
              <h4 className="text-xl text-white">My Email</h4>
              <p className="mt-2 text-zinc-400">richardrs20060318@gmail.com</p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl text-white">Based in</h4>
              <p className="mt-2 text-zinc-400">
                Lençóis Paulista.
                <br />
                Brazil
              </p>
            </div>
            <div className="flex items-center gap-8">
              <Link href="https://github.com/souorichard">
                <LuInstagram className="text-2xl text-primary-400 hover:text-primary-300 active:text-primary-500 transition-all" />
              </Link>
              <Link href="https://github.com/souorichard">
                <LuTwitter className="text-2xl text-primary-400 hover:text-primary-300 active:text-primary-500 transition-all" />
              </Link>
              <Link href="https://github.com/souorichard">
                <LuGithub className="text-2xl text-primary-400 hover:text-primary-300 active:text-primary-500 transition-all" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
