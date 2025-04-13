import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = ({obj}) => {
  return (
    <motion.div className="sticky mt-[3rem] md:mt-0 lg:mt-0 xl:mt-0 w-11/12 md:w-10/12 lg:w-4/5 mx-auto flex flex-col items-center justify-center">
      <motion.img
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        viewport={{ once: false }}
        transition={{ duration: 2, delay: 0.2 }}
        src={obj.text}
        alt="Text"
        className="max-w-xs md:max-w-sm lg:max-w-md"
      />

      <motion.img
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 60 }}
        viewport={{ once: false }}
        transition={{ duration: 2, delay: 0.2 }}
        src={obj.gp}
        alt="GP"
        className="w-[85%] md:w-2/3 lg:w-3/5"
      />

      {[obj.icon1, obj.icon2, obj.icon3, obj.icon4].map((src, idx) => (
        <motion.img
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -20 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3, delay: 2.3 }}
          src={src}
          alt={`Icon ${idx + 1}`}
          className={`hidden lg:inline absolute w-6 md:w-8 ${
            idx === 0 ? 'top-2 left-1/4 md:left-36 md:top-4' :
            idx === 1 ? 'top-2 left-1/2 md:left-2/3' :
            idx === 2 ? 'top-0 left-2/3 md:left-3/4' :
            'top-4 left-2/3 md:left-[200px]'
          }`}
        />
      ))}
    </motion.div>
  )
}

export default HeroSection
