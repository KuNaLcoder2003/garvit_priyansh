import React, { useRef, useContext, useEffect, useState, createContext } from 'react'
import obj from '../data'
import { motion } from 'framer-motion'
import { cn } from '../utils'
import { useNavigate } from 'react-router-dom'
import { PlayCircle, BarChart2, Clock, Heart, Music } from 'lucide-react'
import MusicReleaseCards from './MusicReleaseCards'

const tracks = [
   {
            id: 1,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e02a25647c61efcb54ad1d1707f',
            song: 'Tu Aazma',
            release: '2023',
            duration: '3:18',
            plays: '2,701,338',
            gradient: 'bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-neutral-300 to-stone-400' , 
            link : 'https://open.spotify.com/track/38CMq8hlI8zIzGbENBBG1P'
        },
        {
            id: 2,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e02784eaefd0ecc1e7f55b396a3',
            song: 'Kagaz',
            release: '2024',
            duration: '3:33',
            plays: '437,386',
            gradient: 'bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-amber-500 to-pink-500',
            link : 'https://open.spotify.com/track/7kF41c0FB7LJMs6ilrWqt2'


        },
        {
            id: 3,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e02950868d5c0b9741965239d31',
            song: 'Sanware',
            release: '2022',
            duration: '4:57',
            plays: '2,457,166',
            gradient: 'bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-emerald-500 to-emerald-900' , 
            link : 'https://open.spotify.com/track/4qBHgJWDMuWhgWwp2FFz7z'

        }
  
]
const Releases = () => {
  // For demo purposes only, since we can't import useNavigate
 const navigate = useNavigate()
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-6 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-600 mb-2 sm:mb-0">
          Our Releases
        </h2>
        <button 
          className="text-base md:text-lg font-bold cursor-pointer hover:text-blue-600 transition-colors"
          onClick={() => navigate('/music')}
        >
          See More
        </button>
      </div>
      
      <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 w-full">
        {
          tracks.map((track)=>(
            <MusicReleaseCards obj={track} key={track.id} />
          ))
        }
      </div>
    </div>
  );
};






// const MouseEnterContext = createContext(undefined)


// export const CardContainer = ({
//     children,
//     className,
//     containerClassName,
// }) => {
//     const containerRef = useRef(null);
//     const [isMouseEntered, setIsMouseEntered] = useState(false);

//     const handleMouseMove = (e) => {
//         if (!containerRef.current) return;
//         const { left, top, width, height } =
//             containerRef.current.getBoundingClientRect();
//         const x = (e.clientX - left - width / 2) / 25;
//         const y = (e.clientY - top - height / 2) / 25;
//         containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//     };

//     const handleMouseEnter = (e) => {
//         setIsMouseEntered(true);
//         if (!containerRef.current) return;
//     };

//     const handleMouseLeave = (e) => {
//         if (!containerRef.current) return;
//         setIsMouseEntered(false);
//         containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//     };
//     return (
//         <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 viewport={{ once: false }}
//                 transition={{ delay: 0.2, duration: 1 }}
//                 className={cn(
//                     "py-20 flex items-center justify-center",
//                     containerClassName
//                 )}
//                 style={{
//                     perspective: "1000px",
//                 }}
//             >
//                 <div
//                     ref={containerRef}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseMove={handleMouseMove}
//                     onMouseLeave={handleMouseLeave}
//                     className={cn(
//                         "flex items-center justify-center relative transition-all duration-200 ease-linear",
//                         className
//                     )}
//                     style={{
//                         transformStyle: "preserve-3d",
//                     }}
//                 >
//                     {children}
//                 </div>
//             </motion.div>
//         </MouseEnterContext.Provider>
//     );
// };

// export const CardBody = ({
//     children,
//     className,
// }) => {
//     return (
//         <div
//             className={cn(
//                 "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
//                 className
//             )}
//         >
//             {children}
//         </div>
//     );
// };

// export const CardItem = ({
//     as: Tag = "div",
//     children,
//     className,
//     translateX = 0,
//     translateY = 0,
//     translateZ = 0,
//     rotateX = 0,
//     rotateY = 0,
//     rotateZ = 0,
//     ...rest
// }) => {
//     const ref = useRef(null);
//     const [isMouseEntered] = useMouseEnter();

//     useEffect(() => {
//         handleAnimations();
//     }, [isMouseEntered]);

//     const handleAnimations = () => {
//         if (!ref.current) return;
//         if (isMouseEntered) {
//             ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
//         } else {
//             ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
//         }
//     };

//     return (
//         <Tag
//             ref={ref}
//             className={cn("w-fit transition duration-200 ease-linear", className)}
//             {...rest}
//         >
//             {children}
//         </Tag>
//     );
// };

// // Create a hook to use the context
// export const useMouseEnter = () => {
//     const context = useContext(MouseEnterContext);
//     if (context === undefined) {
//         throw new Error("useMouseEnter must be used within a MouseEnterProvider");
//     }
//     return context;
// };

export default Releases
