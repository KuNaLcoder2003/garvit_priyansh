import React from 'react'
import { NavbarDemo } from '../components/NavbarDemo'
import obj from '../data'
import Footer from '../components/Footer'
import { FocusCardsDemo } from '../components/FocusCards'
import { BentoGridDemo } from '../components/Bento'


const Gallery = () => {
  return (
    <div className='w-[100%]'>
      <NavbarDemo />
      <DummyContent />
      <div className='w-[100%]'>
        <h1>Mumbai</h1>
        <DummyContent/>
      </div>
      <div className='w-[100%]'>
        <h1>Bangalore</h1>
        <DummyContent/>
      </div>
      <div className='w-[100%]'>
        <h1>Delhi</h1>
        <DummyContent/>
      </div>
      <Footer />
    </div>
  )
}

export const DummyContent = () => {
  return (
    <>
      <div className="container mx-auto p-8 pt-24">
        <h1 className="mb-4 text-center text-3xl font-bold">
          Here are some moments from our music journey
        </h1>
        {/* <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as{" "}
        <span className="font-medium">Sticky</span>. Keep in mind that this
        component is <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            {
              id: 1,
              title: obj.band,
              width: "md:col-span-1",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 2,
              title: obj.gpImg1,
              width: "md:col-span-2",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 3,
              title: obj.img_abt,
              width: "md:col-span-1",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 4,
              title: obj.band,
              width: "md:col-span-3",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 5,
              title: obj.img_11,
              width: "md:col-span-1",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 6,
              title: obj.img_13,
              width: "md:col-span-2",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 7,
              title: obj.gpImg1,
              width: "md:col-span-2",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 8,
              title: obj.gpImg1,
              width: "md:col-span-1",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 9,
              title: obj.gpImg1,
              width: "md:col-span-2",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
            {
              id: 10,
              title: obj.gpImg1,
              width: "md:col-span-1",
              height: "h-60",
              bg: "bg-neutral-100 dark:bg-neutral-800",
            },
          ].map((box) => (
            <div
              key={box.id}
              style={{ backgroundImage: `url(${box.title})` }}
              className={`${box.width} ${box.height} flex items-center justify-center rounded-lg p-4 shadow-sm bg-center bg-cover`}
            >

            </div>
          ))}
        </div>
      </div>

      {/* <div className='flex flex-col gap-[3rem] mt-[5rem] items-baseline mb-[3rem]'>
        <h1 className='self-center text-4xl font-bold'>From our tours and shows</h1>
        <FocusCardsDemo />
      </div> */}
    </>
  );
};

export default Gallery
