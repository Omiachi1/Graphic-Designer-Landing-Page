import React from 'react'
import Hero from '../assets/Hero.jpeg'

const HeroSection = () => {

  return (
    <div id='hero' className='px-[4%] md:px-[8%] relative w-full items-center justify-center my-20 '>
      <div className='flex flex-col md:flex-row  justify-between gap-10 mx-auto'>
        <div className='w-ful flex justify-center md:w-[46%]'>
          <img src={Hero} className='w-[450px] h-[580px] rounded-lg' alt="" />
        </div>

        <div className="w-full md:w-[46%]">
          <h1 className="text-4xl md:text-6xl font-bold text-left">
            <span className=""> Hi, I'm</span>
            <span className="text-[#0000A3]"> Jonah</span>
            <span className="ml-2  animate-fade-in-delay-2"> Favour</span>
          </h1>

          <p className="text-lg md:text-xl animate-fade-in-delay-3 text-left  my-4">
            With a passion for visual communication and a dedication to detail, I design graphics that transform ideas into compelling visual experiences. My work focuses on blending creativity with clarity, ensuring every design not only looks beautiful but also communicates with purpose. From typography to color theory, every element is thoughtfully considered to create visuals that resonate deeply with the audience.
          </p>

          <div className="pt-6 flex text-center">
            <a href="#graphics" className="px-9 w-full py-4 rounded-xl text-white font-medium transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection