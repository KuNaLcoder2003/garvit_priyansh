

import React, { useRef } from 'react'
import obj, { images } from '../data'
import { motion, useInView } from 'framer-motion'

const events = [
    {
        eventName: "Requiem NMIMS",
        location : 'Mumbai',
        
        src: images.nims_1,
    },
    {
        eventName: "Antisocial mumbai",
        location : 'Mumbai',
       
        src: images.anti_1
    },
    {
        eventName: "JW Marriott show",

        location : 'Mumbai',
        
        src: images.jw_1
    },
    {
        eventName: "Royal Enfield Motoverse Goa",
        location : 'Goa',
        
        src: images.goa_1
    },
    
    {
        eventName : "SIES Nerul" , 

        location : 'Mumbai',
        
        src : images.anti_6
    } , 
    {
        eventName : "Social Nation Mumbai" , 

        location : 'Mumbai',
        
        src : images.image_one
    } , 

    {
        eventName : "Khwabon Ke Rang Tour - Mumbai" , 
        location : 'Mumbai',
        
        src : images.mumbai_2
    } , 
    {
        eventName : "Khwabon Ke Rang Tour - Bangalore" , 
        location : 'Bangalore',
        
        src : images.img2
    } ,
    {
        eventName : "Khwabon Ke Rang Tour - Delhi" , 
        location : 'Delhi',
        src : images.delhi_2
    } ,  
    

]

const Events = () => {
    return (
        <div className='w-[95%] m-auto py-10'>


           



            <div className='flex flex-col lg:flex-row lg:justify-center flex-nowrap lg:flex-wrap w-[95%]  p-4 lg:w-[85%] m-auto items-center gap-20'>
                {
                    events.map((event, index) => {
                        const ref = useRef(null);
                        const isView = useInView(ref, { once: false })

                        return (
                            <EventCard key={`${event.eventName}_${index}`} img={event.src} location={event.location} name={event.eventName} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export const EventCard = ({img , name , location='Mumbai'}) => {
    return (
        <div className="bg-black text-white p-4 rounded-2xl max-w-70 shadow-lg">
      {/* Album Art */}
      <div className="overflow-hidden rounded-xl">
        <img
        loading="lazy"
          src={img} // your image file
          alt="Where Are You Now"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Song Info */}
      <div className="mt-4">
        <p className="text-white font-semibold text-base leading-tight truncate">
          {name}
        </p>
        <p className="text-gray-400 text-sm mt-1">{location}</p>
      </div>
    </div>
    )
}

export default Events

