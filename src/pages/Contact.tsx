import { Icon } from '@iconify/react'
import Underline from '../components/Underline'
import PageTransition from '../components/Transitions/PageTransition'

export default function Contact() {
  return (
    <div className="w-full">
        <div className="max-w-fit">
            <h1 className='lg:text-5xl text-4xl text-left font-bold mb-5'>Get in contact</h1>
            <h2 className='lg:text-3xl text-2xl text-left font-bold'>Lets have a chat! 🥳</h2>
            <Underline />
        </div>
        <PageTransition>
            <div className="flex flex-col mt-10 justify-center gap-y-5">
                
                <a target='_blank' href="www.linkedin.com/in/dominik-grad">
                    <Icon icon={'akar-icons:linkedin-box-fill'} height={50} />
                </a>
                <a target='_blank' href="https://github.com/xKr9">
                    <Icon icon={'akar-icons:github-fill'} height={50} />
                </a>
                <a href="mailto:dominikgrad47@gmail.com">
                    <Icon icon={'bxl:gmail'} height={50}/>
                </a>
            </div>
        </PageTransition>
    </div>
  )
}   
