import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import MatrixRain from './components/MatrixRain';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className=''>
      
      <BrowserRouter>
        <Navbar />
        <MatrixRain />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence 
      

    >
    <motion.div
      key={location.key}
      initial={{ opacity: 0,x:0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x:0 }}
      transition={{duration: 0.5}}
      className="motion-div"

    >
      <Routes key={location.key} location={location}>
          <Route path='/' element={<Bio />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
    </motion.div>
      
    </AnimatePresence>
  );
}

export default App;