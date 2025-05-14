import React, { useRef } from 'react'
import { BandMembers } from '../components/BandMembers'
import { NavbarDemo } from '../components/NavbarDemo'
import Footer from '../components/Footer'
import { motion, useInView } from 'framer-motion'
import BrandIntro from '../components/BandIntro'
import { BrandScroll } from '../components/BandScroll'
import obj from '../data'
import { Facebook, Instagram, Youtube } from 'lucide-react'

const testimonials = [{
  src: obj.garvit,
  name: "Garvit", designation: "Singer", quote: "Hello everyone, I am Garvit Soni, a passionate and an aspiring singer, composer and music producer from the beautiful city of lakes named Udaipur. I have diligently pursued diploma in Classical music from Maharaja Sayajirao University based in Baroda.  I have recently started working on originals which you can find on my YouTube channel.Living my passion, with just one thought in my head to go miles before I sleep. "
}, {
  src: obj.priyansh,
  name: "Priyansh", designation: "Band Member", quote: "Priyansh Srivastava is an indie singer songwriter from Faridabad, Haryana. He’s a mechanical engineering graduate and has a junior diploma , a senior diploma and a Prabhakar (bachelors) degree in Indian classical vocal music from Prayag Sangeet Samiti , Allahabad. He expresses his emotions through his music and hopes that YOU connect with it❤️ Priyansh Srivastava"

}, {
  src: obj.mithilesh,
  name: "Mithilesh", designation: "Band member", quote: "Priyansh Srivastava is an indie singer songwriter from Faridabad, Haryana. He’s a mechanical engineering graduate and has a junior diploma , a senior diploma and a Prabhakar (bachelors) degree in Indian classical vocal music from Prayag Sangeet Samiti , Allahabad. He expresses his emotions through his music and hopes that YOU connect with it❤️ Priyansh Srivastava"
}, {
  src: obj.nikhil,
  name: "Nikhil", designation: "Band member", quote: "Priyansh Srivastava is an indie singer songwriter from Faridabad, Haryana. He’s a mechanical engineering graduate and has a junior diploma , a senior diploma and a Prabhakar (bachelors) degree in Indian classical vocal music from Prayag Sangeet Samiti , Allahabad. He expresses his emotions through his music and hopes that YOU connect with it❤️ Priyansh Srivastava"
}, {
  src: obj.aditya,
  name: "Aditya", designation: "Band member", quote: "Priyansh Srivastava is an indie singer songwriter from Faridabad, Haryana. He’s a mechanical engineering graduate and has a junior diploma , a senior diploma and a Prabhakar (bachelors) degree in Indian classical vocal music from Prayag Sangeet Samiti , Allahabad. He expresses his emotions through his music and hopes that YOU connect with it❤️ Priyansh Srivastava"
}]

const BandPage = () => {
  const elementInView = useRef(null);
  return (
    <div>
      <NavbarDemo />
      <BrandScroll />


      <div className='flex flex-col gap-6'>
        <h3 className='text-2xl lg:text-8xl w-[100%] text-center font-bold bg-clip-text text-transparent' style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }}>Meet the band</h3>
        {/* <BandMembers/> */}
        <div className='flex flex-col w-[95%]  p-4 lg:w-[85%] m-auto items-center gap-20'>


          {
            testimonials.map((testimonial, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: false });
              return (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0.3, y: 40 }}
                  transition={{ duration: 0.6, ease: "easeIn" }}
                  key={`${index}_${testimonial.name}`} className='flex flex-col md:flex-row gap-10 lg:gap-12 bg-neutral-100 items-center md:items-align rounded-xl shadow-xl p-4'>
                  <div className='w-[280px] h-[280px]'>
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center" />
                  </div>
                  <div className='flex flex-col gap-4 p-2'>
                    <h2 className='text-3xl font-bold bg-clip-text text-transparent' style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }} >{testimonial.name}</h2>
                    {/* <p className='max-w-3xl'> {testimonial.quote} </p> */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="max-w-3xl">
                      {isInView && testimonial.quote.split(" ").map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{
                            filter: "blur(10px)",
                            opacity: 0,
                            y: 5,
                          }}
                          animate={{
                            filter: "blur(0px)",
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.7,
                            ease: "easeInOut",
                            delay: 0.02 * index,
                          }}
                          className="inline-block">
                          {word}&nbsp;
                        </motion.span>
                      ))}
                    </motion.p>
                    <motion.div
                     initial={{opacity : 0 , x : 30}}
                     whileInView={{opacity : 1 , x : 0}}
                     exit={{opacity : 0 , x: -30}}
                     viewport={{once : false}}
                     transition={{duration : 1 , ease : "easeInOut" , delay : 1.7}}
                     className='flex items-center gap-4 w-[100%] lg:w-[50%] p-2'>
                    <Instagram size={28} className='cursor-pointer' />
                    <Facebook  size={28} className='cursor-pointer' />
                    <Youtube  size={28} className='cursor-pointer' />
                  </motion.div>
                  </div>
                  
                </motion.div>
              )
            })
          }


        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BandPage






function ProfileCard() {
  return (
    <div className="w-full m-auto max-w-4xl bg-gray-900 rounded-lg overflow-hidden text-white">
      <div className="relative flex flex-col md:flex-row">
        {/* Left side with image */}
        <div className="md:w-2/5 relative">
          <div className="bg-indigo-600/30 h-full flex items-center justify-center p-6">
            <img
              src="/api/placeholder/400/400"
              alt="Profile"
              className="rounded-full border-4 border-indigo-600/30 z-10 w-48 h-48 object-cover"
            />
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute top-1/4 left-1/4 w-full h-full border border-indigo-300 rounded-full"></div>
              <div className="absolute bottom-0 right-0 text-xs grid grid-cols-6 gap-2 text-indigo-300">
                {Array(24).fill(0).map((_, i) => (
                  <span key={i} className="opacity-30">+</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side with text */}
        <div className="md:w-3/5 p-8">
          <h1 className="text-4xl font-bold mb-1">Lakshay Kumar</h1>
          <p className="text-gray-300 mb-4">CS @Adobe, Instructor @Code-Help</p>

          <div className="space-y-4">
            <p className="text-gray-200">
              Lakshay Kumar is an ace software engineer working in the role of
              <span className="font-semibold"> Computer Scientist II</span> at
              <span className="font-semibold"> Adobe Systems</span> and a popular computer
              science instructor on <span className="font-semibold">CodeHelp</span> Youtube.
            </p>

            <p className="text-gray-200">
              He is working in the industry for the past <span className="font-semibold">6 years</span>,
              working on different real-world problems. He is well-known among students for his
              amazingly simplified explanations with real-life examples, enabling students to
              understand complex topics very easily.
            </p>

            <p className="text-gray-200">
              Many of his ex-students are now working in top product companies like
              <span className="font-semibold"> Microsoft, Amazon, De-Shaw</span> etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
