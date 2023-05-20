import React from 'react'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import TechStack from './TechStack';

function Bio() {
    const links = {
        github: "https://github.com/angelkillerz",
        linkedin: "https://www.linkedin.com/in/sireethon/",
        resume: "https://drive.google.com/file/d/153SgtHx7X3jBgWnbESSlNMiWWIq2mGEM/view?usp=sharing"
    }
    const roles = ["Software Engineer", "Data Engineer", "Backend Developer", "Frontend Developer"]
    const [role, setRole] = useState("");

    const handleOnClick = (link) => {
        window.open(link, "_blank")
    }



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
    <div className='h-full'>
        <AnimatePresence>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
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
                        {backgroundColor: '#64d86b'}
                    }
                    
                    >Get In Touch</button>
                </div>
            </div>
            <div className='cv-profile mt-10'>
                <div className=' flex flex-col justify-center md:flex md:flex-row gap-8'>
                    <button className='gh border-solid border-2 p-4 px-20 rounded-lg text-white' onClick={() => handleOnClick(links.github)}>Github</button>
                    <button className='ln border-solid border-2 p-4 px-20 rounded-lg text-white' onClick={() => handleOnClick(links.linkedin)}>LinkedIn</button>
                    
                </div>
                <div className='flex flex-col justify-center md:flex md:flex-row gap-8 mt-10'>
                    {/* if the function that you want to put in onclick has a parameter you need to wrapt it in arrow function first otherwise it will be called immediately */}
                    <button className='cv border-solid border-2 p-4 px-20 md:px-40 rounded-lg text-white' onClick={() => handleOnClick(links.resume)}>Resume</button>
                </div>
            </div>
            <TechStack/>

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
        </motion.div>
       
        </AnimatePresence>
        
        
        
    </div>
  )
}

export default Bio