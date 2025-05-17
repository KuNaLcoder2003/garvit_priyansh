import React from 'react'
import obj from "../data"
import { Facebook, Twitter, Youtube } from 'lucide-react'
const AboutUs = () => {
  return (
    <div className="flex flex-col gap-20 mt-16 mb-8 px-4">
      <h1 className="text-4xl font-bold text-center">Our Socials</h1>

      <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-8">

        <div className="w-full sm:w-[80%] md:w-[40%] lg:w-[20%] h-[450px] bg-black text-white rounded-2xl flex flex-col gap-3 p-4 items-center justify-between">
          <div
            className="w-full h-[70%] rounded-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${obj.gpImg1})` }}
          ></div>

          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-xl text-center">GARVIT - PRIYANSH</p>
            <div className="flex items-center gap-4">
              <Facebook size={20} />
              <Twitter size={20} />
              <Youtube size={20} />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[80%] md:w-[40%] lg:w-[20%] h-[450px] bg-black text-white rounded-2xl flex flex-col gap-3 p-4 items-center justify-between">
          <div
            className="w-full h-[70%] rounded-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${obj.garvit})` }}
          ></div>

          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-xl text-center">GARVIT</p>
            <div className="flex items-center gap-4">
              <Facebook size={20} />
              <Twitter size={20} />
              <Youtube size={20} />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[80%] md:w-[40%] lg:w-[20%] h-[450px] bg-black text-white rounded-2xl flex flex-col gap-3 p-4 items-center justify-between">
          <div
            className="w-full h-[70%] rounded-xl bg-center bg-cover"
            style={{ backgroundImage: `url(${obj.priyansh})` }}
          ></div>

          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-xl text-center">PRIYANSH</p>
            <div className="flex items-center gap-4">
              <Facebook size={20} />
              <Twitter size={20} />
              <Youtube size={20} />
            </div>
          </div>
        </div>






      </div>
    </div>
  )
}

export default AboutUs
