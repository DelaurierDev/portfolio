import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/f0f9518e-c6a7-4828-84b2-48027d60e55c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <span className='text-blue-600'><a href="mailto:delaurier4@gmail.com">delaurier4@gmail.com</a></span></p>
            </div>
            <input type="text" placeholder='Name' name='name' className='p-2 bg-[#ccd6f6]'/>
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]'/>
            <textarea name="message" placeholder='Message' className="p-2 bg-[#ccd6f6]"rows="10"></textarea>
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk!</button>
        </form>
    </div>
  )
}

export default Contact