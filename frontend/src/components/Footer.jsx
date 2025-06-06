import React from 'react'

const Footer = ({postion}) => {
  return (
    <footer className={"bg-[#0c0f1f] text-white py-12 px-6 md:px-20"}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Gravit - Priyansh</h2>
          <p className="text-sm text-gray-300">
            Garvit–Priyansh is a singer-composer duo blending Indian classical influences with contemporary sounds, creating music that feels gentle, reflective, and effortless. They got signed with T-Series in February 2023 and have since crafted a distinctive sound led by emotion.
          </p>
        </div>

        {/* Middle Sections */}
        <div>
          <h3 className="text-md font-semibold mb-3">Plan Events</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Create and Set Up</li>
            <li>Sell Tickets</li>
            <li>Online RSVP</li>
            <li>Online Events</li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Eventick</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Press</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>How it Works</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div>
          <h3 className="text-md font-semibold mb-3">Stay In The Loop</h3>
          <p className="text-sm text-gray-300 mb-4">Join our mailing list to stay in the loop with our newest for Event and concert</p>
          <div className="flex items-center bg-gradient-to-r from-white to-white/80 rounded-full px-1 py-1 shadow-md w-full">
            <input
              type="email"
              placeholder="Enter your email address.."
              className="px-4 py-2 rounded-full outline-none bg-transparent text-sm text-black placeholder-gray-500 w-full"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <hr className="my-8 border-t border-white/10" />

      <p className="text-center text-xs text-gray-400">
        Copyright © 2025 Garvit - Priyansh
      </p>
    </footer>
  )
}

export default Footer
