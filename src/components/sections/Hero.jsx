import React from 'react'
import ArrowRightLine from '../icons/ArrowRightLine'
import ArrowRight from '../icons/ArrowRight'
import HeroGraphic from '../../assets/graphics/HeroGraphic.webp'
import { useModalContext } from '../../contexts/ModalContext'

function Hero() {
  const {setActiveModal} = useModalContext();
  return (
    <div className="m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] items-center gap-x-18 px-24 py-42
    max-xl:grid-cols-2 max-xl:gap-x-12 max-xl:px-16 max-xl:py-38 max-lg:px-8 max-lg:py-32 max-md:grid-cols-1 max-md:grid-rows-[repeat(2,auto)] max-md:gap-y-12 max-md:px-6 max-md:py-24 max-sm:text-3xl/9 max-sm:tracking-tighter">
        
    <div > 
        <h1 className="text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tighter max-xl:mb-4 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight "> AI-Powered Notes. Organize & Summarize in Seconds</h1>
        <p className="text-primary-100 mb-10 text-xl/loose font-light max-xl:mb-8 max-xl:text-lg/8 max-lg:text-base/loose"> Let AI organize & summarize your notes, <br/>
        saving you time and boosting productivity</p>
        

        <button className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-properties primary-glow-hover primary-glow group flex cursor pointer items-center gap-x-3 rounded-full px-8 py-3.5 max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
        onClick={() => setActiveModal("sign-up") }>
            <p className="text-lg/8 max-xl:text-base/loose">Get Started</p>
            <div className="w-5 max-xl:w-4 max-sm:hidden">
            <ArrowRightLine alt="Arrow right line"
            className="stroke-primary-1300 transition-all -mr-3 w-0 inline ease-in-out opacity-0 group-hover:w-3 group-hover:opacity-100" width={2.5}/>
            
            <ArrowRight alt = "Arrow right" className="stroke-primary-1300 inline w-5 max-xl:w-4" width={2}/>
            </div>
            </button>
    </div>

       
    <div className="relative">
        <div className="bg-primary-1300 absolute top-0 right-0 bottom-0 left-0 rounded-full blur-2xl"/>
        <img src={HeroGraphic} alt="Hero graphics showing note summarizer" 
        className="relative max-h-[30rem] justify-self-end max-md:max-h-auto max-md:max-w-[90%] max-md:justify-self-center max-sm:max-w-full"/>
    </div>
    </div>
    
  )
}

export default Hero