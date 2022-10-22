import React from 'react'
import profile from '../assets/profile-pic.jpeg'
import PageTransition from '../components/Transitions/PageTransition'
import Underline from '../components/Underline'
import CV from '../assets/DomGradCV.pdf'

export default function About() {
  return (
    <>
      <div className="w-full">
            <div className="max-w-fit">
                <h1 className='lg:text-5xl text-4xl  text-left font-bold mb-5'>About me</h1>
                <h2 className='lg:text-3xl text-2xl text-left font-bold'>Want to know more? 🤔</h2>
                <Underline />
            </div>
          <PageTransition>
            <div className="mt-10 flex justify-center mx-auto flex-col max-w-[1280px] items-center gap-y-5">
                <img className='rounded-full w-52 h-52 object-cover' src={profile} alt="handsome-developer-picture" />
                <h2 className='font-bold text-3xl'>Dominik Grad</h2>
                <h3 className='font-thin'>Head of Tech <a target='_blank' className='text-[#985fbe] font-bold' href="https://www.linkedin.com/company/hatless-studios/mycompany/">@Hatless Studios</a></h3>
                <div className="text-sm text-left flex flex-col gap-y-2 max-w-2xl">
                    <p>Final year Software Engineer currently studying Computer Science with a year in Industry at the University of Exeter.</p>
                    <p>I'm currently studying at the University of Exeter looking to finish my final year with a predicted first! After a year in industry
                        <span className='font-bold text-blue-500'> @CoreBlue</span> and working <span className='text-[#985fbe] font-bold'>@Hatless Studios</span> for now my 3rd year, I've been incredibly lucky to learn from some awesome people.</p>
                    <p>Always looking to expand my knowledge in the tech field and build products that can make a difference!</p>
                </div>
                <a href={CV} className='border border-primary rounded-full px-8 py-3 hover:scale-110 transition-all' download>Check out my CV!</a>
            </div>
          </PageTransition>
      </div>
    </>
  )
}   
