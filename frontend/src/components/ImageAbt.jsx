import React from 'react'
import obj from '../data'

const ImageAbt = () => {
  return (
    <div className='w-[100%] m-auto h-[500px] bg-cover bg-center relative 3xl:min-h-[850px]' style={{
        backgroundImage: `url(${obj.gpImg1})`,
    }}>
        <p className='w-full md:w-[50%] text-center z-10 text-white text-5xl absolute top-1/2 left-1/2 tranform -translate-x-1/2 font-bold'>Our videos about making music have reached millions</p>
      
    </div>
  )
}

export default ImageAbt
