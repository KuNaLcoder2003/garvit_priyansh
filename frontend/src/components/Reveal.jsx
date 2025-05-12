import React, { useRef } from 'react'
import { TextReveal } from './TextReveal'
import obj from '../data'
import { useScroll, useTransform , motion } from 'framer-motion'
import Releases from './Releases'

const Reveal = () => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target : container,
        offset : ["start start" , "end end"]
    })
    return (
        <div ref={container} className='h-[200vh] relative overflow-hidden'>
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
        </div>
    )
}

const Section1 = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress , [0,1] , [1,0.8]);
    const rotate = useTransform(scrollYProgress , [0,1] , [0, -10])
    return (
        <motion.div style={{scale , rotate}} className='sticky h-screen top-0'>
           <img src={obj.about} fill />
        </motion.div>
    )
}

const Section2 = ({scrollYProgress})=>{
    const scale = useTransform(scrollYProgress , [0,1] , [0.7 , 1]);
    const rotate = useTransform(scrollYProgress , [0,1] , [10, 0])
    return (
        <motion.div style={{scale , rotate}} className='relative h-screen'>
            <Releases/>
        </motion.div>
    )
}

export default Reveal
