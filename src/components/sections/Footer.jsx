import React from 'react'
import {footerCols} from "../../utils/content"
import Logo from "../icons/Logo"

function Footer() {
  return (
    <footer className='bg-gradient-to-bottom'>
        <div className='m-auto flex max-w-[90rem] justify-between px-24 py-32 max-xl:px-16 max-xl:py-24'>
            <div>
                <a href="#" className="flex-item-center gap-x-3">
                    <Logo className="stroke-primary-500" 
                    width = {4.5}
                    alt="NoteFlow logo icon"
                    />
                    <p className="text-primary-50 text-xl font-bold tracking-tight">NoteFlow</p>
                </a>
            </div>
 
            <div className="grid grid-cols-[repeat(4,max-content)] gap-x-24 max-xl:gap-x-18">
                {footerCols.map((col) => (
                     <div key={col.id}>
                        <p className='text-primary-50 mb-8 text-xl/loose font-semibold'>{col.category}</p>
                        <ul className='flex flex-col gap-y-4 max-xl:gap-y-3 '>
                            {col.links.map((link, i) => (
                                <li key={i} className='cursor-pointer'>
                                    <a href="#" className="text-primary-50 hover:text-primary-500 transition-properties text-lg/8 font-light max-xl:text-base/loose">
                                    {link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer