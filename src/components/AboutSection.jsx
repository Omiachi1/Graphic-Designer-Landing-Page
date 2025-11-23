import { Paintbrush, Trello, Waypoints } from 'lucide-react'
import React from 'react'
import cv from '../assets/cv.jpeg'
const AboutSection = () => {
  return (
    <div id='about' className='px-[4%] md:px-[8%] relative w-full items-center justify-center my-20 '>

      <div className='mx-auto w-fit'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className="text-[#0000A3]"> Me</span>
        </h2>

        <div className='flex flex-col md:flex-row justify-between w-full'>

          <div className='space-y-6 w-full md:w-[47%]'>

            <h3 className='md:text-3xl text-lg w-full font-bold'>
              Passionate Graphic Designer & Visual Storyteller
            </h3>

            <p>
              With over 8 years of experience crafting digital and print visuals, I specialize in transforming ideas into compelling designs that communicate and inspire. I'm dedicated to creating visually striking and meaningful graphics that engage audiences, strengthen brands, and bring concepts to life.
            </p>
            <p>I constantly push the boundaries of design, experimenting with typography, color, layout, and emerging tools to stay at the forefront of the ever-evolving world of graphic design.</p>

            <div className='flex flex-col text-center sm:flex-row gap-6 pt-4'>

              <a href="#contact" className="px-20 py-4 rounded-xl text-white font-medium transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95">Get In Touch</a>

              <a download={cv} className="px-20 py-4 rounded-xl text-white font-medium transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95">Download CV</a>
            </div>

          </div>

          <div className='flex flex-col w-full mt-8 md:mt-0 md:w-[46%] gap-6'>

            <div className='relative rounded-lg bg-[linear-gradient(to_right,hsl(222_47%_8%),hsl(222_47%_8%))] bg-clip-padding border border-transparent p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-full bg-[#0000A3]/10'>
                  <Trello className='h-6 w-6 text-[#0000A3]'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Branding & Identity</h4>
                  <p className='mt-2'>Building cohesive visual identities that make brands memorable.</p>
                </div>
              </div>
            </div>

            <div className='relative rounded-lg bg-[linear-gradient(to_right,hsl(222_47%_8%),hsl(222_47%_8%))] bg-clip-padding border border-transparent p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-full bg-[#0000A3]/10'>
                  <Waypoints className='h-6 w-6 text-[#0000A3]'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Digital & Social Media Design</h4>
                  <p className='mt-2'>Creating eye-catching visuals for websites, social media, and online campaigns.</p>
                </div>
              </div>
            </div>

            <div className='relative rounded-lg bg-[linear-gradient(to_right,hsl(222_47%_8%),hsl(222_47%_8%))] bg-clip-padding border border-transparent p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>

              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-full bg-[#0000A3]/10'>
                  <Paintbrush  className='h-6 w-6 text-[#0000A3]'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Illustration & Print Design</h4>
                  <p className='mt-2'>Creating unique illustrations, marketing materials, and print campaigns that stand out.</p>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </div>
  )
}

export default AboutSection