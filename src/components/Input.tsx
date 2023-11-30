import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  textarea?: boolean
}

export default function Input({ label, type, textarea, ...props }: InputProps) {
  return (
    <fieldset className="flex flex-col">
      <label htmlFor="fullname" className="text-sm text-zinc-400 font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea
          placeholder="Insert your message"
          className="h-[140px] px-4 py-2 bg-white border-2 border-zinc-500 hover:border-primary-300 focus:border-primary-500 caret-primary-500 rounded outline-none transition-all"
        />
      ) : (
        <input
          type={type}
          className="px-4 py-2 bg-white border-2 border-zinc-500 hover:border-primary-300 focus:border-primary-500 caret-primary-500 rounded outline-none transition-all"
          {...props}
        />
      )}
    </fieldset>
  )
}
