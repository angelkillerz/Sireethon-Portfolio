import React from 'react'
import { useState, useEffect } from 'react'
import { color, motion } from 'framer-motion';

function Bio() {

    const roles = ["Software Engineer", "Data Engineer", "Backend Developer", "Frontend Developer"]
    const [role, setRole] = useState("");
    useEffect(() => {
        let index = 0
        const intervalId = setInterval(() => {
            setRole(roles[index]);
            index++;
            if (index >= roles.length){
                index = 0
            }
            
        }, 1000)    
        
        return () => clearInterval(intervalId);
        
      },[]);

  return (
    <div>
        <div className='bio m-10 mt-64'>
            <div className='flex flex-col items-center gap-10 mt-10'>
                <div>
                    <span className='text-white'>Hi, My name is,</span>
                </div>
                <div>
                    <span className='text-white text-2xl sm:text-4xl md:text-6xl font-bold'>Sireethon Bunchongpru</span>
                </div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 5}}
                    exit={{opacity: 0}}
                >
                   <span 
                   className='text-white text-xl sm:text-2xl md:text-3xl'
                   >{`I am a .... ${role}`}
                   </span>
                </motion.div>
                <div>
                    <button 
                    className='button-hire bg-slate-800 rounded-lg p-4 text-white'
                    style={
                        {backgroundColor: '#03A062'}
                    }
                    
                    >Get In Touch</button>
                </div>
            </div>
            <div className='cv-profile mt-10'>
                <div className=' flex flex-col justify-center md:flex md:flex-row gap-8'>
                    <button className='gh border-solid border-2 p-4 px-20 rounded-lg text-white'>Github</button>
                    <button className='ln border-solid border-2 p-4 px-20 rounded-lg text-white'>LinkedIn</button>
                    
                </div>
                <div className='flex flex-col justify-center md:flex md:flex-row gap-8 mt-10'>
                    <button className='cv border-solid border-2 p-4 px-20 md:px-40 rounded-lg text-white'>Resume</button>
                </div>
            </div>

            {/* <div className='flex m-10 md:flex flex-col items-center mt-10'>
                <div className=''>
                    <span className='text-white text-xl font-bold'>About me</span>
                </div>
                <div className='sm:max-w-[80%] md:max-w-[50%] px-4 mx-auto text-left'>
                    <p className='text-white'>
                    Hello there! My name is Sireethon Bunchongpru, and I am a passionate software developer with a diverse range of interests, including data analysis, machine learning, web development, and game development. I truly relish the opportunity to create innovative and engaging solutions using my computer skills. It's a pleasure to meet you, and I look forward to exploring the world of technology together!
                    </p>
                </div>
               
            </div> */}
        </div>
        
        
    </div>
  )
}

export default Bio