import { useEffect } from 'react'

import './App.css'
import Home from './component/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'
import About from './component/About/About'
import Achievement from './component/Achievement/Achievement'
import ContactForm from './component/ContactForm/ContactForm'
import Photos from './component/Photos/Photos'
import Skills from './component/Skills/Skills'
import Footr from './component/Footr/Footr'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Error from './component/Error/Error'
function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, [])
  return (
    <>
   <Router>
       <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={ <About/>} />
            <Route path="/History" element={<Achievement/>} />
            <Route path="/contact" element={ <ContactForm/>} />
            <Route path="/video" element={ <Photos/>} />
            <Route path="/skills" element={ <Skills/>} />
            <Route path="*" element={ <Error/>} />

          </Routes>
         <Footr/>
       </Router>
      

    </>
  )
}

export default App
