
import obj from '../data'

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { ArrowLeftIcon , ArrowRightIcon } from 'lucide-react';
import { cn } from '../utils';
import { AnimatePresence, motion } from "motion/react";
import { FocusCards } from './FocusCards';
import Carousel from './Carousel';




export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return <FocusCards cards={cards} />;
}





const Images = () => {
    const data = [
        {
            img: obj.gpImg,
            head: "Musicians",
            text: "We express what words can't - through rythm , harmony and soul",
        },
        {
            img: obj.gpImg,
            head: "Composers",
            text: "We craft melodies from emotions, turning moments into music"
        },
        {
            img: obj.img_abt,
            head: "Artists",
            text: "We create experiences that stay with you - far beyond the last note"
        }
    ]
    
    const products = [{link : obj.gpImg1 } , {link : obj.gpImg1} , {link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1} ,{link : obj.gpImg1}  ]
  return (
    <div className='w-[100%] m-auto h-screen bg-center bg-cover relative overflow-hidden' style={{backgroundImage : `url(${obj.img_abt})`}} >
      <Carousel/>
    </div>
  )
}

export default Images
