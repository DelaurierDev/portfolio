import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo image" style={{width: '50px'}}/>
        </div>

        {/*Menu*/}

            <ul className='hidden md:flex'>
                <li className='hover:text-blue-600 duration-300'>Home</li>
                <li className='hover:text-blue-600 duration-300'>About</li>
                <li className='hover:text-blue-600 duration-300'>Skills</li>
                <li className='hover:text-blue-600 duration-300'>Projects</li>
                <li className='hover:text-blue-600 duration-300'>Contact</li>
            </ul>


        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/*Mobile Menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
        </ul>


        {/*Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center text-gray-300'
                    href="https://www.linkedin.com/in/luc-delaurier-702902258/">Linkedin </a><FaLinkedin size={30}/>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center text-gray-300'
                    href="https://github.com/DelaurierDev">Github </a><FaGithub size={30}/>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center text-gray-300'
                    href="">Email </a><HiOutlineMail size={30}/>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69]'>
                    <a className='flex justify-between items-center text-gray-300'
                    href="">Resume </a><BsFillPersonLinesFill size={30}/>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar