

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
        src : images.image_two
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


           



            <div className='flex flex-col w-[95%]  p-4 lg:w-[85%] m-auto items-center gap-20'>
                {
                    events.map((event, index) => {
                        const ref = useRef(null);
                        const isView = useInView(ref, { once: false })

                        return (
                            <EventCard key={`${event.name}_${index}`} event={event} ref={ref} isInView={isView} index={index} />
                        )
                    })
                }

            </div>
        </div>
    )
}

const EventCard = ({ event, isInView, ref, index }) => {
    return (
        <motion.div
            ref={ref}
            // initial={{ opacity: 0, y: -40 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0.3, y: 20 }}
            // transition={{ duration: 0.6, ease : "linear" }}
            key={`${index}_${event.eventName}`} className='flex flex-col md:flex-row gap-14 lg:gap-16  items-center md:items-align rounded-xl shadow-2xl p-2 lg:p-4'>
            <div className='w-[280px] h-[280px]'>
                <img
                    src={event.src}
                    alt={event.eventName}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center" />
            </div>
            <div className='flex flex-col gap-4 p-2'>
                <div className=''>
                    <h2 className='text-3xl font-bold bg-clip-text text-transparent text-center lg:text-start' style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} >{event.eventName}</h2>
                    {/* <p className='text-md font-semibold text-center lg:text-start'>23/09/2024</p> */}
                </div>

                {/* <p className='max-w-3xl'> {testimonial.quote} </p> */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-3xl text-stone-400 font-semibold text-center lg:text-start">
                    {isInView && event.description.split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                filter: "blur(10px)",
                                opacity: 0,
                                y: 5,
                            }}
                            animate={{
                                filter: "blur(0px)",
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: "easeInOut",
                                delay: 0.02 * index,
                            }}
                            className="inline-block">
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, ease: "easeIn", delay: 0.5 }}
                    className='flex items-center gap-4 w-[100%] lg:w-[50%] p-2'>

                    {/* <button className='font-semibold w-[90%] m-auto lg:m-0 lg:w-[30%] p-2 bg-green-500 text-white rounded-lg cursor-pointer'>Know more</button> */}
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Events

