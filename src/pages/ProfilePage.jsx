import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function ProfilePage() {
  return (
    
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >

            <div className='flex m-10 md:flex flex-col items-center mt-10 h-full gap-10'>
            <div className=''>
                    <span className='text-white text-4xl font-bold'>About me</span>
                </div>
                <div>
                    <img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d5ee996b-3c60-4060-396d-9f3450b39f00/width=512/00451-2324204168.jpeg" alt="avatar photo" />
                </div>
                <div className='sm:max-w-[80%] md:max-w-[50%] px-4 mx-auto text-left mt-4'>
                    <p className='text-white text-xl'>
                    Hello there! My name is Sireethon Bunchongpru, and I am a passionate software developer with a diverse range of interests, such as data analysis, machine learning, web development, game development even with Art and crafts. I truly relish the opportunity to create innovative and engaging solutions using my skills. It's a pleasure to meet you, and I look forward to exploring the world of technology together!
                    </p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                </div>
        
        </motion.div>
                
               
   
  )
}

export default ProfilePage