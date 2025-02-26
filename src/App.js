import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './components/HomaPage';
import Career from './pages/Career';
import Blogs from './pages/Blogs';


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Vyaparlay  - Bespoke Web and Mobile Applications");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/Blogs" element={<Blogs />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
