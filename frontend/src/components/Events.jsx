

import React, { useRef } from 'react'
import obj, { images } from '../data'
import { motion, useInView } from 'framer-motion'

const events = [
    {
        eventName: "NMIMS FEST Requiem - Duo Show",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur nostrum odit error sed consequuntur at quia facilis, voluptatibus amet dolore aperiam perspiciatis. Odio quasi aperiam reprehenderit temporibus cumque eum!',
        src: images.nims_1,
    },
    {
        eventName: "Antisocial mumbai",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur nostrum odit error sed consequuntur at quia facilis, voluptatibus amet dolore aperiam perspiciatis. Odio quasi aperiam reprehenderit temporibus cumque eum!',
        src: images.anti_1
    },
    {
        eventName: "JW Marriott show",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur nostrum odit error sed consequuntur at quia facilis, voluptatibus amet dolore aperiam perspiciatis. Odio quasi aperiam reprehenderit temporibus cumque eum!',
        src: images.jw_1
    },
    {
        eventName: "Goa show - Royal Enfield motoverse show",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur nostrum odit error sed consequuntur at quia facilis, voluptatibus amet dolore aperiam perspiciatis. Odio quasi aperiam reprehenderit temporibus cumque eum!',
        src: images.goa_1
    },
    
    {
        eventName : "Lafz EP promotion show - SIES COLLEGE Nerul" , 
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur nostrum odit error sed consequuntur at quia facilis, voluptatibus amet dolore aperiam perspiciatis. Odio quasi aperiam reprehenderit temporibus cumque eum!',
        src : images.anti_6
    } , 
    {
        eventName : "Social nation show - BKC - Mumbai" , 
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur nostrum odit error sed consequuntur at quia facilis, voluptatibus amet dolore aperiam perspiciatis. Odio quasi aperiam reprehenderit temporibus cumque eum!',
        src : images.image_one
    } , 

    {
        eventName : "Debut India tour - Mumbai" , 
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur nostrum odit error sed consequuntur at quia facilis, voluptatibus amet dolore aperiam perspiciatis. Odio quasi aperiam reprehenderit temporibus cumque eum!',
        src : images.mumbai_2
    } , 
    {
        eventName : "Debut India tour - Bangalore" , 
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur nostrum odit error sed consequuntur at quia facilis, voluptatibus amet dolore aperiam perspiciatis. Odio quasi aperiam reprehenderit temporibus cumque eum!',
        src : images.img2
    } ,
    {
        eventName : "Debut India tour - Delhi" , 
        description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet tenetur nostrum odit error sed consequuntur at quia facilis, voluptatibus amet dolore aperiam perspiciatis. Odio quasi aperiam reprehenderit temporibus cumque eum!',
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
                            <EventCard key={`${event.eventName}_${index}`} img={event.src} name={event.eventName} />
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

