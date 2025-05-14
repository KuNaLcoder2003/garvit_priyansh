// import React from 'react'
// import obj from '../data'
// import { motion } from 'framer-motion'

// const Events = () => {
//     return (
//         <div className='w-[95%] m-auto h-[250px]'>

//             <p className='w-full text-3xl left-6 md:text-4xl font-bold color-purple-600 mb-[3rem] md:w-[50%] relative md:left-20'>Upcoming Events</p>



//             <div className='flex flex-col gap-[20px] items-center'>
//                 <div className='flex flex-col md:flex-row md:items-center md:w-[90%] md:justify-center h-[100%] gap-[3rem]'>
//                     <EventCard initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} />
//                     <EventCard initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} />
//                     <EventCard initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} />
//                 </div>

//                 <div className='flex flex-col md:flex-row md:items-center md:w-[90%] md:justify-center h-[100%] gap-[3rem]'>
//                     <EventCard initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} />
//                     <EventCard initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} />
//                     <EventCard initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} />
//                 </div>
//             </div>


//         </div>
//     )
// }


// const EventCard = ({ initial, exit, whileInView }) => {
//     return (
//         <motion.div
//             initial={initial}
//             whileInView={whileInView}
//             exit={exit}
//             viewport={{ once: false }}
//             transition={{ duration: 1.5, delay: 0.3 }}
//             className='flex flex-col w-full relative md:w-[40%] h-[320px] lg:w-[33%]  justify-start shadow-2xl overflow-hidden rounded-xl'>
//             <div className='bg-center bg-cover w-[100%] h-[190px] rounded-t-xl' style={{ backgroundImage: `url(${obj.gpImg1})` }}>
//             </div>

//             <div className='flex gap-4 p-4 items-baseline relative left-1/2 transform -translate-x-1/2  overflow-hidden '>
//                 <div className='flex flex-col items-baseline font-bold'>
//                     <p className='text-lg text-indigo-700'>{"Apr"}</p>
//                     <p className='text-2xl'>{14}</p>
//                 </div>
//                 <div className=''>
//                     <h3 className='text-2xl font-bold'>KKR TOUR BANGALORE</h3>
//                     <p className='w-full md:w-[80%] md:p-0'>We will get you directly seated and make you enjoy the show</p>
//                 </div>
//             </div>
//         </motion.div>

//     )
// }

// export default Events

import React from 'react'
import obj from '../data'
import { motion } from 'framer-motion'

const Events = () => {
    return (
        <div className='w-[95%] m-auto py-10'>

            <p className='text-2xl md:text-4xl font-bold text-purple-600 mb-10 text-center md:text-left md:pl-20'>
                Past Events
            </p>

            <div className='flex flex-col gap-10 items-center'>
                {/* Row 1 */}
                <div className='flex flex-col items-center md:flex-row flex-wrap justify-center gap-6 w-full'>
                    <EventCard initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} />
                    <EventCard initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} />
                    <EventCard initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} />
                </div>

                {/* Row 2 */}
                <div className='flex flex-col items-center md:flex-row flex-wrap justify-center gap-6 w-full'>
                    <EventCard initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} />
                    <EventCard initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} />
                    <EventCard initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} />
                </div>
            </div>
        </div>
    )
}

const EventCard = ({ initial, exit, whileInView }) => {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            exit={exit}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className='w-full max-w-[90%] md:max-w-[45%] lg:max-w-[30%] shadow-2xl rounded-xl overflow-hidden'
        >
            <div className='bg-center bg-cover w-full h-[190px]' style={{ backgroundImage: `url(${obj.gpImg1})` }}></div>

            <div className='flex gap-4 p-4 items-start'>
                <div className='flex flex-col font-bold text-left'>
                    <p className='text-lg text-indigo-700'>Apr</p>
                    <p className='text-2xl'>14</p>
                </div>
                <div>
                    <h3 className='text-xl md:text-2xl font-bold'>KKR TOUR BANGALORE</h3>
                    <p className='text-sm md:text-base text-gray-600'>We will get you directly seated and make you enjoy the show</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Events

