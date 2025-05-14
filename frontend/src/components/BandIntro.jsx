




import { useState } from 'react';
import {  MailIcon , Instagram , Youtube , Facebook} from 'lucide-react';
import obj from '../data';

import { motion } from 'framer-motion';


const teamMembers = [{
    name: "Garvit Soni",
    role: "Singer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus, ipsum fugit consequatur reiciendis explicabo distinctio temporibus asperiores. Soluta eligendi in sequi explicabo fuga laboriosam saepe, non unde dignissimos iusto.",
    // skills: ["UI/UX Design", "Prototyping", "User Research", "Design Systems"],
    image: obj.garvit,
},
{
    name: "Priyansh Shrivastav",
    role: "Singer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus, ipsum fugit consequatur reiciendis explicabo distinctio temporibus asperiores. Soluta eligendi in sequi explicabo fuga laboriosam saepe, non unde dignissimos iusto.",
    // skills: ["UI/UX Design", "Prototyping", "User Research", "Design Systems"],
    image: obj.priyansh,
},
{
    name: "Mithilesh",
    role: "Pioanist",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus, ipsum fugit consequatur reiciendis explicabo distinctio temporibus asperiores. Soluta eligendi in sequi explicabo fuga laboriosam saepe, non unde dignissimos iusto.",
    // skills: ["UI/UX Design", "Prototyping", "User Research", "Design Systems"],
    image: obj.mithilesh,
},
{
    name: "Aditya",
    role: "Guitarist",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus, ipsum fugit consequatur reiciendis explicabo distinctio temporibus asperiores. Soluta eligendi in sequi explicabo fuga laboriosam saepe, non unde dignissimos iusto.",
    // skills: ["UI/UX Design", "Prototyping", "User Research", "Design Systems"],
    image: obj.aditya,
} , 
{
    name: "Nikhil",
    role: "Drumer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus, ipsum fugit consequatur reiciendis explicabo distinctio temporibus asperiores. Soluta eligendi in sequi explicabo fuga laboriosam saepe, non unde dignissimos iusto.",
    // skills: ["UI/UX Design", "Prototyping", "User Research", "Design Systems"],
    image: obj.nikhil,
}
]
// bg-gradient-to-br from-indigo-500 to-purple-600
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

                                    {/* <div className="grid grid-cols-2 gap-2 mb-4 w-full">
                            {teamMember.skills.map((skill, i) => (
                                <div key={i} className="px-3 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-xs text-indigo-700 dark:text-indigo-300 font-medium flex items-center justify-center">
                                    {skill}
                                </div>
                            ))}
                        </div> */}

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


