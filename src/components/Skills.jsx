import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import PythonImg from '../assets/pythonicon.png'
import Java from '../assets/java.png'
import Flask from '../assets/flask.png'
import Mongo from '../assets/mongo.png'
import Github from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} alt="CSS Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="JavaScript Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReactImg} alt="React Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={PythonImg} alt="Python Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Java} alt="Java Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Flask} alt="Flask Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Flask</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Mongo} alt="Mongodb Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Github} alt="Github Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills