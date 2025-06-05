import React from 'react'
import obj, { images } from '../data'

const Temp = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>

            <div className='relative h-[100%] w-[100%] boder-2 border-black flex items-center justify-center overflow-hidden'>
                <div className='absolute h-[100%] w-[100%] bg-black/80 z-[-800]'></div>
                <h1 className='absolute text-2xl font-bold text-center text-white z-[999]'>HIIIIIIIII</h1>
                <div className='absolute z-[-999] h-[100%] w-[100%] grid grid-cols-3 grid-rows-3 gap-1'>
                    <div class="bg-center bg-cover aspect-square" style={{ backgroundImage: `url(${images.mumbai_1})` }} ></div>
                    <div class="bg-center bg-cover aspect-square" style={{ backgroundImage: `url(${images.anti_1})` }} ></div>
                    <div class="bg-center bg-cover aspect-square" style={{ backgroundImage: `url(${images.goa_3})` }} ></div>
                    <div class="bg-center bg-cover aspect-square" style={{ backgroundImage: `url(${images.nims_4})` }} ></div>
                    <div class="bg-center bg-cover aspect-square" style={{ backgroundImage: `url(${images.delhi_2})` }} ></div>
                    <div class="bg-center bg-cover aspect-square" style={{ backgroundImage: `url(${images.image_two})` }} ></div>
                    <div class="bg-center bg-cover aspect-square" style={{ backgroundImage: `url(${images.image_one})` }} ></div>
                    <div class="bg-center bg-cover aspect-square" style={{ backgroundImage: `url(${images.img2})` }} ></div>
                    <div class="bg-center bg-cover aspect-square" style={{ backgroundImage: `url(${images.img7})` }} ></div>
                </div>
            </div>

        </div>
    )
}

export default Temp
