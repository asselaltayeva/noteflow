import React from 'react'
import Logo from "../icons/Logo"
import { navigationLinks } from "../../utils/content"

function Navigation() {
  return (
    <nav className='text-primary-50 m-auto flex items-center justify-between max-w-[90rem] px-6 md:px-12 lg:px-24 py-6 text-lg font-light'>
      <a href="#" className="flex items-center gap-x-3">
        <Logo className="h-6" width={5} />
        <p className="text-xl font-bold tracking-tight">NoteFlow</p>
      </a>

      <ul className="flex items-center gap-x-10 font-medium">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a className="hover:text-primary-500 transition-properties" href={link.href}>
              {link.link}
            </a>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-x-4'>
        <button className="border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 border-2 px-5 py-2.5 rounded-full font-medium">
          Login
        </button>
        <button className="bg-primary-50 text-primary-1300 transition-properties primary-glow primary-glow-hover hover:bg-primary-250 px-6 py-3 rounded-full font-medium">
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navigation
