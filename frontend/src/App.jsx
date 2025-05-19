import { ChevronDown } from 'lucide-react';
import './App.css'
import obj from './data.js';
import { useEffect, useRef, useState } from 'react';

import HeroSection from './components/HeroSection.jsx';
import Heroimage from './components/Heroimage.jsx';
import Intro from './components/Intro.jsx';
import ImageAbt from './components/ImageAbt.jsx';
import Releases from './components/Releases.jsx';
import { HeroParallax } from './components/HeroParallax.jsx';

import SpotifyArtistPage from './components/SpotifyArtistPage.jsx';


import AboutUs from './components/AboutUs.jsx';
import ContactSection from './components/ContactSection.jsx';

import { TimelineDemo } from './components/TimeLineDemo.jsx';
import Footer from './components/Footer.jsx';
import { NavbarDemo } from './components/NavbarDemo.jsx';

import { Routes, Route } from "react-router-dom"
import Gallery from './pages/Gallery.jsx';
import MusicPage from './pages/MusicPage.jsx';

import EventsPage from './pages/EventsPage.jsx';
import BandPage from './pages/BandPage.jsx';

import { InfiniteMovingCardsDemo } from './components/MovingCardsDemo.jsx';
import { Iphone15ProDemo } from './components/IPhoneDemo.jsx';
import Testimonials from './pages/Testimonials.jsx';


function App() {


  return (

    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/music' element={<MusicPage />} />
      <Route path='/events' element={<EventsPage />} />
      <Route path='/bandInfo' element={<BandPage />} />
      <Route path='/testimomials' element={<Testimonials/>} />
    </Routes>


  );
}

const LandingPage = () => {
  const heroRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const layers = heroRef.current.querySelectorAll('.layer');
      const x = e.clientX;
      const y = e.clientY;

      layers.forEach((layer) => {
        const speed = (layer).dataset.speed || '2';
        const movement = parseInt(speed) / 10;

        const moveX = (x - window.innerWidth / 2) * movement;
        const moveY = (y - window.innerHeight / 2) * movement;

        (layer).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
      <div ref={heroRef} className="relative bg-gradient-to-b from-[#0f1729] to-black min-h-screen md:max-h-500px flex flex-col gap-6 md:gap-8 justify-start overflow-hidden w-full">

        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="layer absolute top-20 left-10 md:left-20 w-24 md:w-48 h-24 md:h-48 rounded-full bg-blue-500/10 dark:bg-blue-500/20" data-speed="2" />
          <div className="layer absolute bottom-20 md:bottom-40 right-10 md:right-20 w-32 md:w-64 h-32 md:h-64 rounded-full bg-purple-500/10 dark:bg-purple-500/20" data-speed="3" />
          <div className="layer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl md:max-w-4xl lg:max-w-6xl aspect-square rounded-full bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 blur-3xl" data-speed="1" />
        </div>
        <div className="mt-4 flex flex-col gap-4 lg:gap-6 z-10 w-full">
          {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
          <NavbarDemo />
          <HeroSection obj={obj} />
          <Heroimage obj={obj} />
        </div>
       
      </div>
      <Intro />
      <ImageAbt />      
      <Releases/>
      <SpotifyArtistPage />
      <HeroParallax />
      <TimelineDemo />
      <div className='w-[100%] flex flex-col p-4 mt-14 lg:p-0'>
        <div className='w-[85%] self-center'>
          <h2 className='text-2xl md:text-3xl w-[90%] md:w-[60%]  font-bold text-slate-600 relative lg:w-[30%] 3xl:text-center'>Here's what people say about us</h2>
        </div>
        <InfiniteMovingCardsDemo/>
      </div>
      <ContactSection />
      <AboutUs />
      <Iphone15ProDemo/>
      <Footer />
    </>
  )
}

export default App;
