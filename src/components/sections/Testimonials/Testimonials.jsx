import React from 'react'
import { useState } from 'react';
import TestimonialsList from './TestimonialsList';
import { testimonials as test } from '../../../utils/content';
import CaretUp from '../../icons/CaretUp';

function Testimonials() {
    const [expanded, setExpanded] = React.useState(true);
  return (
    <section className ="bg-gradient-to-top ">
        <div className='m-auto flex max-w-[90rem] flex-col items-center px-24 py-32 max-xl:px-16 max-xl:py-24'>
            
            <div className='mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6'>
            <p className="text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8">Testimonials</p>
            <h2 className="text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter max-xl:text-5xl/16">
                What our AI-powered <br/>
                notetakers have to say
            </h2>
            <p className='text-primary-100 px-28 text-center text-xl/loose font-light primary-glow'>
                NoteFlow has helped 1008&apos;s supercharge their productivity with
                cutting edge AI-powered notetaking.
            </p>
            </div>

        <div className="mb-20 grid grid-cols-3 gap-x-6 max-xl:gap-x-4">
            <TestimonialsList testimonials ={test.slice(0, expanded ? 5 : 2)}  />
            <TestimonialsList testimonials ={test.slice(5, expanded ? 10 : 7)}  />
            <TestimonialsList testimonials ={test.slice(10, expanded ? 15 : 12)}  />
        </div>

        <button
        className="text-primary-50 border-primary-50 transition hover:bg-primary-50 hover:text-primary-1300 group cursor-pointer items-center rounded-full border-2 px-8 py-3.5 text-lg flex gap-2
        max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
        onClick={() => setExpanded((curr) => !curr)}
        >
            {expanded ? "Show Less" : "Show More"}
            <CaretUp
                className={`stroke-primary-50 group-hover:stroke-primary-1300 transition-transform duration-300 ${
                expanded ? "rotate-0" : "rotate-180"}`}
                alt ="Caret Up Icon"
                width={2}
            />
        </button>

            </div>
    </section>
  )
}

export default Testimonials