import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Luc DeLaurier</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' >I'm a Full Stack Devloper</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer looking 
                to help build the perfect digital experience. Currently, I'm focused on building responsive full-stack web applications</p>
            <div>
                <Link to="work" smooth={true} duration={500}><button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-700'>View Work <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span></button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home