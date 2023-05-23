import React from 'react';
import project1 from '/src/assets/CV-website.png';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';



function Projects() {

  const projectsList = [
    {
      id: uuidv4(),
      title: "Python Project using Python 2",
      description: "This is a project that I did using Python 2. It was a project that I did for my first year of university. It was a project that I did using Python 2. It was a project that I did for my first year of university.",
      image: project1,
      github: "",
      live: ""
    },
    {
      id: uuidv4(),
      title: "Tic-Tac-Toe",
      description: "Tic-Tac-Toe game using React.js",
      image: "https://user-images.githubusercontent.com/24986505/235785973-63bf4ee0-b102-425b-adaf-3a2e4f41da9a.png",
      github: "",
      live: ""
    },
    {
      id: uuidv4(),
      title: "Just-Fit Activity Tracker",
      description: "Activity traker web app using MERN (MongoDB, Express, React, Node.js)",
      image: "",
      github: "",
      live: ""
    },
    {
      id: uuidv4(),
      title: "Food API",
      description: "A simple API that can do basic CRUD using Node.js, Express,js and MongoDB",
      image: "",
      github: "",
      live: ""

    },
    {
      id: uuidv4(),
      title: "Just-Fit Activity Tracker",
      description: "Activity traker web app using MERN (MongoDB, Express, React, Node.js)",
      image: "",
      github: "",
      live: ""
    },
    {
      id: uuidv4(),
      title: "Just-Fit Activity Tracker",
      description: "Activity traker web app using MERN (MongoDB, Express, React, Node.js)",
      image: "",
      github: "",
      live: ""
    },
    {
      id: uuidv4(),
      title: "Just-Fit Activity Tracker",
      description: "Activity traker web app using MERN (MongoDB, Express, React, Node.js)",
      image: "",
      github: "",
      live: ""
    },
    {
      id: uuidv4(),
      title: "Just-Fit Activity Tracker",
      description: "Activity traker web app using MERN (MongoDB, Express, React, Node.js)",
      image: "",
      github: "",
      live: ""
    },
    {
      id: uuidv4(),
      title: "Just-Fit Activity Tracker",
      description: "Activity traker web app using MERN (MongoDB, Express, React, Node.js)",
      image: "",
      github: "",
      live: ""
    },
  ]

  const buttonStyle = 'hover:bg-slate-400/30 p-2 rounded-lg text-white hover:transition ease-in-out duration-500 hover:scale-120';
  return (
    <div className='m-0'>
        
       <div className='projects-container flex flex-col items-center justify-center'>
          <div className='m-20'>
            <h1 className='text-white text-4xl font-bold
            '>Projects</h1>
          </div>
          <div className='flex flex-wrap justify-center'>
          { 
              projectsList.map((project) => {
                return(
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{scale: 1.2}}
                    transition={{ duration: 2 }}
                    exit={{ opacity: 0 }}
                  
                  
                  >
                      <div className='project-component text-white border-solid border-2 p-6 rounded-lg m-10'>
                         <div className='project-card'>
                            <img className='w-80 object-cover' src={project1} alt="" />
                          <div className='project-info text-center m-2'>
                            <p>{project.title}</p>
                          </div>
                            <div className='flex justify-between m-2'>
                            <button className={buttonStyle}
                                style={{
                                 border: '1px solid #64d86b',
                            }}
                            >View Project</button>

                            <button className={buttonStyle}
                                style={{
                                border: '1px solid #64d86b',
                            }}
                            >Source Code</button>
                            </div>
                        </div>
                    </div>
                  </motion.div>
                  
                );
                
              })
            }
          </div>
            
            
          
       </div>
      
    </div>
  )
}

export default Projects