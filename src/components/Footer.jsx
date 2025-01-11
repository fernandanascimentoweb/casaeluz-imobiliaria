import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start
        '>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img className='w-[80px] h-[50px] rounded-full' src={assets.logo_construcao} alt="" />
                <p className='text-gray-400 mt-4'>
                    Uma apresentação completa dos detalhes e características de um imóvel, como localização, metragem e quantidade de cômodos. Para criar uma boa descrição, é possível: Ser específico e detalhista,Falar sobre cada cômodo individualmente.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Empresa</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white' >Home</a>
                    <a href="#About" className='hover:text-white' >Sobre</a>
                    <a href="#Contact" className='hover:text-white' >Contato</a>
                    <a href="#" className='hover:text-white' >Política de Privacidade </a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Assine nossa newsletter </h3>
                <p className='text-gray-400 mb-4 max-w-80'>As últimas notícias, artigos e recursos, enviados para sua caixa de entrada semanalmente.</p>
                <div className='flex gap-2'>
                    <input type="email" placeholder='Digite seu email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'  />
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'> Inscrever </button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Todos os direitos Reservados - 2025 © Fernanda Marino
        </div>
    </div>
  )
}

export default Footer