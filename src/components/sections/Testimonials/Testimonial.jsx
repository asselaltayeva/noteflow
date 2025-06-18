import React from 'react'
import { motion } from 'framer-motion'
import Star from '../../icons/Star'

function Testimonial({ test }) {
  return (
    <motion.li className='bg-primary-1300 rounded-2xl px-8 py-10 max-xl:px-6 max-xl:py-8'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: "100%" }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <div className="flex gap-1 pb-8">
        {[...Array(test.rating)].map((_, index) => (
          <Star key={index} className="fill-primary-100" alt="Filled Star Icon" />
        ))}
        {[...Array(5-test.rating)].map((_, index) => (
          <Star key={index} alt="Nonfilled Star Icon" />
        ))}
      </div>

      <p className='text-primary-50 pb-16 text-lg/loose font-light max-xl:text-base/loose'>{test.description}</p>

      <div className='flex items-center gap-x-6 max-xl:gap-x-4'>
        <img src={test.src} alt="Portrait Headshot" className='h-18 rounded-full max-xl:h-16'/>
        <div>
            <p className='text-primary-500 text-xl/7 font-bold tracking-tight max-xl:text-lg'>{test.name}</p>
            <p className='text-primary-75 text-base/loose tracking-tight max-xl:text-sm'>{test.title}</p>
        </div>
      </div>
    </motion.li>
  )
}

export default Testimonial
