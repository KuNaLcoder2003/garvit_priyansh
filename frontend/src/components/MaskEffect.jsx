import React, { useState, useRef } from 'react'
import { TextReveal } from '../components/TextReveal'
import { MotionValue, motion, useMotionTemplate,useScroll , useSpring , useTransform } from "framer-motion"
import { images  } from '../data'
import Footer from './Footer'




const springVars = {
    stiffness: 100,
    damping: 20,
}

const MaskEffect = () => {

    const { scrollYProgress } = useScroll()

    const maskSize = useSpring(useTransform(scrollYProgress, [0, 1], [9000, 25]), springVars)
    const maskPosition = useSpring(useTransform(scrollYProgress, [0, 1], [-700, 100]), springVars)
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1])

    const outerImageOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const whiteFillOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [0.5, 1])
    return (
          <div className='h-[500vh] bg-black'>
        
                <motion.div
                  className='fixed inset-0 h-full w-full bg-fixed bg-center bg-fixed bg-cover' style={{ backgroundImage: `url(${images.img8})`, scale: imageScale, opacity: outerImageOpacity }}>
                </motion.div>
        
                <motion.div className={`fixed flex items-center m-auto w-full h-full inset-0 [mask-image:url('/garvit-priyansh-larger.svg')]  [mask-repeat:none]`}
                  style={{
                    maskSize: useMotionTemplate`${maskSize}px`,
                    maskPosition: useMotionTemplate`center ${maskPosition}px`,
                    maskRepeat: "no-repeat",
                  }}>
                  <motion.div
        
                    className='fixed inset-0 h-full w-full bg-fixed bg-center bg-cover' style={{ backgroundImage: `url(${images.img8})`, scale: imageScale }}>
                  </motion.div>
                  <motion.div className='fixed inset-0 h-full w-full bg-white'
                    style={{ opacity: whiteFillOpacity }}
                  >
        
                  </motion.div>
        
        
        
        
                </motion.div>
        
                  
                
        
        
              </div>
    )
}

export default MaskEffect
