import React from 'react'
import {motion} from 'framer-motion'
//import react-svg from '../assets/react.svg'



function TechBox({ tech, imgSrc }) {
  return (
    <div className='flex flex-col items-center justify-center m-auto p-4 border border-gray-200 rounded w-40 h-40 hover:bg-gray-100 hover:opacity-100 transition-colors duration-200 text-black'>
      <img className='h-16 w-16 mx-auto' src={imgSrc} alt={tech} />
      {/* <h2 className='text-center mt-2 text-white hover:text-black'>{tech}</h2> */}
    </div>
  );
}

function TechStack() {
  const techs = [
    { name: 'Javascript', img: 'src/assets/javascript.svg' },
    { name: 'HTML', img: 'src/assets/html.svg' },
    { name: 'CSS', img: 'src/assets/css.svg' },
    { name: 'Python', img: 'src/assets/python.svg' },
    { name: 'Node', img: 'src/assets/node.svg' },
    { name: 'React', img: 'src/assets/react.svg' },
    { name: 'Git', img: 'src/assets/git.svg' },
    { name: 'Sql', img: 'src/assets/sql.svg' },
  ];

  return (
    <article className='flex flex-col items-center justify-center mt-20'>
      <h1 className='text-white font-bold text-2xl'>Tech Stack</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}

      >
        <div className='flex flex-wrap justify-center  gap-4 mt-4'>
          {techs.map((tech) => (
            <TechBox key={tech.name} tech={tech.name} imgSrc={tech.img} />
          ))}
        </div>
      </motion.div>
      
    </article>
  );
}

export default TechStack;
