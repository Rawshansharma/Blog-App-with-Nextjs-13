import React from 'react'
import Link from 'next/link'
import {FaInstagram , FaTwitter , FaGithub, FaLinkedin} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10 '>
        <div className='prose prose-xl mx-auto  justify-between flex-col sm:flex-row'>
         <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 p-5'>
         <Link href='/' className='text-white/90 hover:text-white no-underline '>
            Raushan sharma
         </Link>
         </h1>
         <div className='flex flex-grow justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl '>
          <Link className='text-white/80  hover:text-white' href='https://www.instagram.com/__raushan_sharma__/ ' target='_blank'> 
           <FaInstagram/>
          </Link>
          <Link target='_blank' className='text-white/80  hover:text-white' href='https://twitter.com/Raushan89754506'> 
           <FaTwitter/>
          </Link>
          <Link target='_blank' className='text-white/80  hover:text-white' href='https://www.linkedin.com/in/raushan-sharma-3067851b1/'> 
           <FaLinkedin/>
          </Link>
          <Link target='_blank' className='text-white/80  hover:text-white' href='https://github.com/Rawshansharma'> 
           <FaGithub/>
          </Link>
         </div>
        </div>
    </nav>
  )
}

export default Navbar