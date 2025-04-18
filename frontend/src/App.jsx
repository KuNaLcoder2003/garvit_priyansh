import { ChevronDown } from 'lucide-react';
import './App.css'
import obj from './data.js';
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Heroimage from './components/Heroimage.jsx';
import Intro from './components/Intro.jsx';
import ImageAbt from './components/ImageAbt.jsx';
import Releases from './components/Releases.jsx';
import { HeroParallax } from './components/HeroParallax.jsx';
import { BandMembers } from './components/BandMembers.jsx';

function App() {
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
      <div ref={heroRef} className="relative bg-gradient-to-b from-[#0f1729] to-black min-h-screen flex flex-col gap-6 md:gap-8 justify-start overflow-hidden w-full">

        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="layer absolute top-20 left-10 md:left-20 w-24 md:w-48 h-24 md:h-48 rounded-full bg-blue-500/10 dark:bg-blue-500/20" data-speed="2" />
          <div className="layer absolute bottom-20 md:bottom-40 right-10 md:right-20 w-32 md:w-64 h-32 md:h-64 rounded-full bg-purple-500/10 dark:bg-purple-500/20" data-speed="3" />
          <div className="layer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl md:max-w-4xl lg:max-w-6xl aspect-square rounded-full bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 blur-3xl" data-speed="1" />
        </div>

        <div className="mt-4 flex flex-col gap-4 md:gap-6 z-10 w-full">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <HeroSection obj={obj} />
          <Heroimage obj={obj} />
        </div>
        <a href="#about" className="flex flex-col items-center absolute z-10 bottom-0 left-1/2 text-black-600 font-bold">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
      <Intro />

      <ImageAbt/>

      <Releases/>

      <HeroParallax/>
      <BandMembers/>
    </>

  );
}

export default App;
