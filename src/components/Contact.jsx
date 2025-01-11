import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0b38669d-9f88-4fcc-bcf8-daf3e214d8ef");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Formulário enviado com sucesso")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };
  



  return (

    // motion antes da div e para dar animacao 

    <motion.div 
      initial={{opacity:0, x:-200}}
      transition={{duration: 1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> 
          Fale <span className='underline underline-offset-4 decoration-1 under font-light'> Conosco </span> 
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto '>
          Pronto para fazer uma mudança? Vamos construir seu futuro juntos
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Nome Completo :
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name'  placeholder='Digite seu nome completo' required />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Email :
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email'  placeholder='Digite seu email' required />
                </div>
            </div>
            <div className='my-6 text-left'>
                Mensagem :
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' 
                name="Message" placeholder='Digite sua mensagem..' required></textarea>
            </div>
            <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded' > {result ? result : "Enviar Mensagem"} </button>
        </form>


    </motion.div>
  )
}

export default Contact