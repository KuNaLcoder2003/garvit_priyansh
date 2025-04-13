import React from 'react'
import { Facebook, Mail, Music, Phone, Twitter, Youtube } from 'lucide-react'
const Navbar = ({setMenuOpen , menuOpen}) => {
  return (
    <>
    <div className="relative w-11/12 md:w-10/12 lg:w-4/5 mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3">
        {[Facebook, Twitter, Youtube, Music].map((Icon, idx) => (
          <div key={idx} className="w-6 h-6 rounded-full flex items-center justify-center">
            <Icon color="white" size={14} className="md:w-4 md:h-4" />
          </div>
        ))}
      </div>

      <p className="text-white text-sm md:text-base">Garvit - Priyansh</p>

      <div className="flex items-center gap-2 md:gap-3">
        <Phone size={14} color="white" className="md:w-4 md:h-4" />
        <Mail size={14} color="white" className="md:w-4 md:h-4" />
      </div>
    </div>

    
    <nav className="bg-transparent md:bg-gradient-to-br from-[#3d0e14] to-[#101422] mt-[3rem] md:mt-0 w-11/12 md:w-10/12 lg:w-4/5 mx-auto p-3 md:p-4 rounded-md md:rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-primary">
       <span className="hidden md:block text-white font-bold text-xl md:text-2xl lg:text-3xl">Garvit - Priyansh</span>
     

      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white border border-white px-3 py-1 rounded">
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      <div className={`flex-col md:flex md:flex-row items-center gap-3 md:gap-5 lg:gap-6 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
        {['Home', 'About', 'Music', 'Gallery', 'Contact Us', 'Listen'].map((item, idx) => (
          <p key={idx} className="text-white font-bold text-sm lg:text-lg cursor-pointer">{item}</p>
        ))}
      </div>
    </nav>
    </>
  )
}

export default Navbar
