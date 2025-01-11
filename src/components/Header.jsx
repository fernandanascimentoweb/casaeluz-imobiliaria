import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"



const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden opacity-80' style={{backgroundImage: "url('/casa_nova.jpg')"}} id='Header'>
        < Navbar />

        {/* motion antes da div e para dar animacao , acaba no viewport */}
        <motion.div
        initial={{opacity:0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}  
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
              A casa que se encaixam nos seus sonhos
            </h2>
            <div className='space-x-6 mt-16'>
                <a href="#Projects" className='border border-black text-black bg-gray-300 px-8 py-3 rounded'> Projetos </a>
                <a href="#Contact" className='bg-blue-500 border border-white px-8 py-3 rounded'> Contato </a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header