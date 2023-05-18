import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  const navBarContents = [
    { title: 'About', link: '/' },
    { title: 'Profile', link: '/profile' },
    { title: 'Projects', link: '/projects' },
    { title: 'Contact', link: '/contact' },
  ];

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleResize = () => {
    setIsNavbarOpen(false)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
  },[])

  return (
    <nav className='flex justify-between items-center gap-4 px-4 py-2  w-full flex-shrink-0 drop-shadow-md opacity-70'>
      <div className='flex-grow'>
        <span className='text-white text-xl md:text-3xl font-bold'>Sireethon.dev</span>
      </div>
      <div className='flex gap-4 md:flex md:gap-4 relative'>
        <button
          className='md:hidden text-white'
          onClick={toggleNavbar}
        >
          <span className='hover:underline text-xl font-bold'>Menu</span>
        </button>
        <ul
          className={`absolute  md:flex md:gap-4  md:static top-16 md:top-0 right-0 md:right-auto bg-slate-800 opacity-80 p-2 rounded md:bg-transparent md:space-x-4 md:space-y-0 space-y-4 flex-col md:flex-row md:justify-end md:flex-grow md:items-center md:text-white md:text-lg md:font-bold ${isNavbarOpen ? 'flex' : 'hidden'} ho`}
        >
          {navBarContents.map((item) => (
            <motion.li 
            key={item.title}
            whileHover={{scale: 1.1}}
            className='hover:bg-slate-800 p-2 rounded'
            >
              <Link to={item.link} onClick={toggleNavbar}>
                <span className='text-white text-lg'>{item.title}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


