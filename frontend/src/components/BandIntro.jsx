




import { useState } from 'react';
import {  MailIcon , Instagram , Youtube , Facebook} from 'lucide-react';
import obj from '../data';

import { motion } from 'framer-motion';


const teamMembers = [{
    name: "Garvit Soni",
    role: "Singer",
    bio: "Garvit Soni is a Udaipur-based music producer, composer, and singer known for blending soulful melodies with intricate production. With a Diploma in Indian Classical Music from Maharaja Sayajirao University, Baroda, his work reflects emotional depth and refined musicality. Garvit showcases his original compositions on YouTube, each infused with quiet intensity. Offstage, he finds joy in cricket, channeling creativity into all areas of life. His calm presence and artistic vision form the heart of the Garvit-Priyansh sound.",
    
    image: obj.garvit,
},
{
    name: "Priyansh Srivastava",
    role: "Singer",
    bio: "Priyansh Srivastava is an indie singer-songwriter and composer from Faridabad, Haryana, blending emotional storytelling with classical training. A Mechanical Engineering graduate, he holds a Junior Diploma, Senior Diploma, and Prabhakar in Indian classical vocals from Prayag Sangeet Samiti. His music explores themes of love, introspection, and spiritual depth. Beyond music, Priyansh enjoys football and cooking, often likening the art of songwriting to crafting a dish. With heartfelt vocals and a structured approach, he brings soul and discipline to the duo’s unique sound.",
    
    image: obj.priyansh,
},
{
    name: "Mithilesh Panchal",
    role: "Keyboardist",
    bio: "Mithilesh began his musical journey with the piano, which laid the groundwork for his evolution into music production, composition, and arrangement. Known for blending emotion with technical precision, he plays a key role in crafting the band’s rich, cohesive sound both on stage and in the studio. His versatility and creative instincts continue to push the band’s musical boundaries forward.",
    
    image: obj.mithilesh,
},
{
    name: "Aditya Kulkarni",
    role: "Guitarist",
    bio: "Aditya Kulkarni is a self-taught guitarist who also plays the keyboards. With a growing passion for music production, he primarily explores cinematic, Bollywood, and fusion styles. In his free time, he enjoys jamming, experimenting with new musical ideas, and discovering fresh sounds and plugins. For Aditya, music is a constant presence — whether he's listening, creating, or planning his next musical venture.",
    
    image: obj.aditya,
} , 
{
    name: "Nikhil Bachute",
    role: "Drumer",
    bio: "Nikhil Bachute is a dynamic drummer with over eight years of experience and four years in the professional music scene. Renowned for his versatility and rhythmic precision, he has toured globally and performed with top artists like Sukhwinder Singh, Shaan, Gajendra Verma, and Ash King. He’s been part of major acts including Vinod B Project, Euphony, Sayli Kamble, Rohit Raut, and Saif Ali Khan’s live ensemble. A multi-time band competition winner, Nikhil also explored acting, appearing in Season 2 of Bandish Bandits. With a strong groove and evolving style, he continues to make his mark in the Indian music industry.",
   
    image: obj.nikhil,
} , 
{
    name : 'Bhav Narang',
    role : 'Bassist',
    bio : 'Bhav Narang is a Delhi-based multi-genre musician with roots in jazz and blues. A Grade 8 certified pianist, bassist, and guitarist from Trinity and Rockschool London, he has mentored over 80 students in the past four years. Bhav has performed alongside artists like Diljit Dosanjh, Tony Kakkar, and Suresh Wadkar, and was part of a Guinness World Record-winning band that composed for Amazon Prime’s The Forgotten Army. In 2023, he gained national recognition on India’s Got Talent Season 10 with Bombay Shor, honoring the legendary KK.',
    image : obj.bhav

}
]

const BandIntro = () => {
    return (
        <div className='flex flex-col m-auto md:items-center lg:flex-row w-[100%] lg:flex-wrap lg:w-[80%] lg:justify-center overflow-x-hidden'>
            {
                teamMembers.map((teamMember, index) => (
                    <motion.div 
                    initial={{opacity : 0 , x : 10}}
                    whileInView={{opacity : 1 , x : 0}}
                    exit={{opacity : 0 , x : -10}}
                    viewport={{once : false}}
                    transition={{duration : 0.8 , ease : "easeIn"}}
                    key={`${teamMember.name}_${index}`} className="flex flex-col items-center p-8 w-full max-w-md lg:w-[40%]">
                        {/* <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">3D Card with Tilt Effect</h2> */}
                        <div className="group shadow-xl relative w-full rounded-xl  p-1 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 transform perspective-1000 hover:rotate-1" style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }}>
                            <div className="rounded-lg bg-white dark:bg-gray-900 p-6 ">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative w-32 h-32 mb-5">
                                        <div className="absolute inset-0 rounded-full bg-indigo-500 blur-md opacity-30 group-hover:opacity-40 transition-opacity"></div>
                                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-300">
                                            <img src={teamMember.image} alt={teamMember.name} className="w-full h-full object-cover" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-1 bg-clip-text text-transparent dark:text-indigo-400" style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} >{teamMember.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">{teamMember.role}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{teamMember.bio}</p>

                                  

                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50  flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-800/40 transition-colors cursor-pointer">
                                            <Instagram size={18} className="text-indigo-900 " />
                                        </div>
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50  flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-800/40 transition-colors cursor-pointer">
                                            <Youtube size={18} className="text-indigo-900 " />
                                        </div>
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50  flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-800/40 transition-colors cursor-pointer">
                                            <Facebook size={18} className="text-indigo-900 " />
                                        </div>
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50  flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-800/40 transition-colors cursor-pointer">
                                            <MailIcon size={18} className="text-indigo-900 bg-clip-text " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}


export default BandIntro


