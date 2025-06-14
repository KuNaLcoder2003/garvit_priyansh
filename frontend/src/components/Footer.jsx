import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Toaster,toast} from "react-hot-toast"

const Footer = ({postion}) => {

  const [email , setEmail] = useState('')

  function sendMail() {
    try {
      fetch('https://garvit-priyansh-backend.onrender.com/mail' , {
        method : 'POST' , 
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          email : email
        }) , 
        
      }).then(async(response)=>{
        const data = await response.json();
        if(data.id) {
          toast.success('Subscribed to Garvit-Priyansh newsletter')
        } else {
          toast.error('Failed to subscribe')
        }
      })
    } catch (error) {
      toast.error('Something went wrong')
    }
  }
  const navigate = useNavigate();
  return (
    <footer className={"bg-[#0c0f1f] text-white py-12 px-6 md:px-20"}>
      <Toaster/>
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
          <h3 className="text-md font-semibold mb-3">Our Events</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className='cursor-pointer'>Tickets</li>
            <li className='cursor-pointer' onClick={()=>navigate('/events')}>Events</li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Eventick</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className='cursor-pointer' onClick={()=>navigate('/about')}>About Us</li>
            <li className='cursor-pointer' onClick={()=>window.open('https://www.google.com/search?sca_esv=a39f92e395423779&sxsrf=AHTn8zoMSWUbRnJlrxX7pfOaqnACg9Eg4Q:1745170219964&q=garvit+-+priyansh&tbm=nws&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBnsX62dbVmWR6QCQ5QEtPRrN1KFHti9EP_dqC742rxzHNYrK4aIGJt-VBGd9a6Cy3Dl1HqW_sTT8wc9lpslZ6fuwWHalBlUzR8HEEWjKxPPga3QxEMEVcfy757Rbg7ewU6YNapAj2QBRkJdPrPwxazHtPzxcCuafXXHCgIJEkvb8bDo2fw&sa=X&ved=2ahUKEwiGjaLYkeeMAxWPklYBHTJeIREQ0pQJegQIEBAB&biw=729&bih=798&dpr=2' , '_blank')}>Press</li>
            <li className='cursor-pointer' onClick={()=>window.open('https://forms.gle/1t2aErfkLNEySDPUA' , '_blank')}>Contact Us</li>
            
          </ul>
        </div>

        {/* Subscription Section */}
        <div>
          <h3 className="text-md font-semibold mb-3">Stay In The Loop</h3>
          <p className="text-sm text-gray-300 mb-4">Join our mailing list to stay in the loop with our newest for Event and concert</p>
          <div className="flex items-center bg-gradient-to-r from-white to-white/80 rounded-full px-1 py-1 shadow-md w-full">
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email address.."
              className="px-4 py-2 rounded-full outline-none bg-transparent text-sm text-black placeholder-gray-500 w-full"
            />
            <button onClick={()=>{sendMail()}} className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition duration-300 whitespace-nowrap">
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
