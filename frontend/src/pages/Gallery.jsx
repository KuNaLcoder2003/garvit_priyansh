import React from 'react'
import { NavbarDemo } from '../components/NavbarDemo'
import obj, { images } from '../data'
import Footer from '../components/Footer'
import { FocusCardsDemo } from '../components/FocusCards'
import { BentoGridDemo } from '../components/Bento'

const arr1 = [
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
    title: images.delhi_1,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 8,
    title: images.delhi_2,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 9,
    title: images.delhi_3,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 10,
    title: images.delhi_4,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
]

const arr2 = [
  {
    id: 1,
    title: images.img1,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 2,
    title: images.img2,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 3,
    title: images.img3,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 4,
    title: images.mumbai_3,
    width: "md:col-span-3",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 5,
    title: images.img5,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 6,
    title: images.img6,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 7,
    title: images.img7,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 8,
    title: images.img8,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 9,
    title: images.mumbai_1,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 10,
    title: images.mumbai_4,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
]

const arr3 = [{
    id: 1,
    title: images.anti_1,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 2,
    title: images.anti_2,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 3,
    title: images.anti_3,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 4,
    title: images.anti_4,
    width: "md:col-span-3",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 5,
    title: images.anti_5,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 6,
    title: images.anti_6,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 7,
    title: images.anti_7,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 8,
    title: images.anti_8,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 9,
    title: images.goa_1,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 10,
    title: images.goa_2,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
]

const arr4 = [{
    id: 1,
    title: images.goa_3,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 2,
    title: images.nims_1,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 3,
    title: images.nims_2,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 4,
    title: images.nims_3,
    width: "md:col-span-3",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 5,
    title: images.nims_4,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 6,
    title: images.nims_5,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 7,
    title: images.nims_6,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 8,
    title: images.nims_7 ,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 9,
    title: images.nims_8,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 10,
    title: images.jw_1,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  }
]
const arr5 = [{
    id: 1,
    title: images.jw_2,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 2,
    title: images.jw_3,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 3,
    title: images.jw_4,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 4,
    title: images.jw_5,
    width: "md:col-span-3",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 5,
    title: images.jw_6,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 6,
    title: images.jw_7,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 7,
    title: images.image_one,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 8,
    title: images.image_two,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 9,
    title: images.mumbai_4,
    width: "md:col-span-2",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },
  {
    id: 10,
    title: images.img3,
    width: "md:col-span-1",
    height: "h-60",
    bg: "bg-neutral-100 dark:bg-neutral-800",
  },]
const Gallery = () => {
  return (
    <div className='w-[100%]'>
      <NavbarDemo />
      <DummyContent heading={' Here are some moments from our music journey'} arr={arr1} />
      <DummyContent heading={'Some more pictures'} arr={arr2} />
      <DummyContent heading={"Some more..."} arr={arr3} />
      <DummyContent heading={"Somee more..."} arr={arr4} />
      <DummyContent heading={"Last set..."} arr={arr5} />
      <Footer />
    </div>
  )
}

export const DummyContent = ({ heading, arr }) => {
  return (
    <>
      <div className="container mx-auto p-8 pt-24">
        {
          heading.length == 0 ? (null) : <h1 className="mb-4 text-center text-3xl font-bold">
            {heading}
          </h1>
        }
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {arr.map((box) => (
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
