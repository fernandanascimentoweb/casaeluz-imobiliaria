import React, { useEffect, useState } from 'react';
import {assets} from '../assets/assets';


const NavBar = () => {
  // configuracao do mobile menu aparecer e fechar aba do hamburgue
    const [ showMobileMenu, setshowMobileMenu ] = useState(false)

    useEffect (() => {
      if(showMobileMenu){
        document.body.style.overflow = 'hidden'
      }else{
        document.body.style.overflow = 'auto'
      }
      return ()=>{
        document.body.style.overflow = 'auto'
      };
    },[showMobileMenu])


  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
          <img className='w-[100px] h-[80px] rounded-full' src={assets.logo_construcao} alt="" />
          
          <ul className='hidden md:flex gap-7 text-white font-bold'>
            <a href="#Header" className='cursor-pointer hover:text-blue-500' > Home </a>  
            <a href="#About" className='cursor-pointer hover:text-blue-500' > Sobre  </a>  
            <a href="#Projects" className='cursor-pointer hover:text-blue-500' > Projetos </a>  
            <a href="#Testimonials" className='cursor-pointer hover:text-blue-500' > Depoimentos </a>  
          </ul>
          <button className='hidden md:block bg-white px-8 py-2 rounded-full'>
            Inscrever
          </button>
          {/* menu hamburgue imagem */}
          <img onClick={()=> setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/*  mobile-menu configuracao */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0' } fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all `}>
          {/* o icome do x */}
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setshowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
          </div>
          {/* fim icone do x pra fechar */}
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={()=> setshowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'> Home </a>
            <a onClick={()=> setshowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'> Sobre </a>
            <a onClick={()=> setshowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'> Projetos </a>
            <a onClick={()=> setshowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'> Depoimentos </a>
          </ul>
        </div>
    </div>
  )
}

export default NavBar