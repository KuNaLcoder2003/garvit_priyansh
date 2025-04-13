import React from 'react'
import { motion } from 'framer-motion'

const Heroimage = ({obj}) => {
  return (
    <div className="w-[250%] md:w-[170%] lg:w-[130%] xl:w-[110%] 2xl:w-[120%] absolute overflow-hidden -bottom-56 md:-bottom-100 lg:-bottom-110 xl:-bottom-140 2xl:-bottom-140 left-1/2 transform -translate-x-1/2">
      <motion.img
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        viewport={{ once: false }}
        transition={{ duration: 2, delay: 0.2 }}
        src={obj.img}
        alt="Bottom image"
        className="w-full object-cover"
      />
    </div>
  )
}

export default Heroimage
