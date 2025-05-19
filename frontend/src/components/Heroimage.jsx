// import React , {useState , useEffect} from 'react'
// import { motion } from 'framer-motion'

// const useWindowWidth = () => {
//     const [width, setWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => setWidth(window.innerWidth);

//         window.addEventListener('resize', handleResize);
//         console.log(width);

//         // Clean up on unmount
//         return () => window.removeEventListener('resize', handleResize);
//     }, [width]);

//     return width;
// };

// const Heroimage = ({obj}) => {
//   const width = useWindowWidth();
//   return (
//     <div className={`w-[250%] md:w-[170%] lg:w-[130%] xl:w-[110%] 2xl:w-[120%]  absolute overflow-hidden -bottom-56 md:-bottom-100 lg:-bottom-110 xl:-bottom-140 2xl:-bottom-140 ${width == '2560' &&'bottom-[-1000px] w-[90%]'} left-1/2 transform -translate-x-1/2`}>
//       <motion.img
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -60 }}
//         viewport={{ once: false }}
//         transition={{ duration: 1.2, delay: 0.2 }}
//         src={obj.img}
//         alt="Bottom image"
//         className="w-full object-cover"
//       />
//     </div>
//   )
// }

// export default Heroimage


import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // run only once on mount

  return width;
};

const useWindowHeigth = ()=>{
  const [height , setHeight] = useState(window.innerHeight)
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // run only once on mount

  return height;
}

const Heroimage = ({ obj }) => {
  const width = useWindowWidth();
  const height = useWindowHeigth();

  return (
    <div
      className={`
        w-[250%] md:w-[170%] lg:w-[130%] xl:w-[110%] 2xl:w-[120%]
        absolute overflow-hidden
        -bottom-56 md:-bottom-100 lg:-bottom-110 xl:-bottom-140  2xl:-bottom-140 3xl:top-5
        left-1/2 transform -translate-x-1/2
      `}
    >
      <motion.img
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.2 }}
        src={obj.img}
        alt="Bottom image"
        className={`w-full object-cover ${width == '2560' ? 'scale-[0.79]' : ''}`}
      />
    </div>
  );
};

export default Heroimage;
