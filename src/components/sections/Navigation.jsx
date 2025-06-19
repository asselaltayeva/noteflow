import React from 'react'
import Logo from "../icons/Logo"
import { navigationLinks } from "../../utils/content"
import { useModalContext } from '../../contexts/ModalContext'
import MobuleMenuIcon from './MobileMenu/MobuleMenuIcon';

function Navigation() {
  const {setActiveModal} = useModalContext();
  return (
    <nav className="text-primary-50 m-auto flex items-center justify-between max-w-[90rem] px-24 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8 max-md:px-6">
      <a href="#" className="flex items-center gap-x-3 max-md:gap-x-2">
        <Logo className="h-6 max-md:h-5" width={5} alt="NoteFlow logo icon"/>
        <p className="text-xl font-bold tracking-tight">NoteFlow</p>
      </a>

      <ul className="flex items-center gap-x-10 font-medium max-xl:gap-x-6 max-lg:hidden max-md:text-lg/8 ">
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a className="hover:text-primary-500 transition-properties" href={link.href}>
              {link.link}
            </a>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-x-4 max-lg:hidden'>
        <button className="border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 border-2 px-5 py-2.5 rounded-full font-medium max-xl:px-6 max-xl:py-3 max-xl:text-base/loose">
          Login
        </button>
        <button className="bg-primary-50 text-primary-1300 transition-properties primary-glow primary-glow-hover hover:bg-primary-250 px-6 py-3 rounded-full font-medium max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
        onClick={() => setActiveModal("sign-up")}>
          Get Started
        </button>
      </div>

      <MobuleMenuIcon />
    </nav>
  )
}

export default Navigation
