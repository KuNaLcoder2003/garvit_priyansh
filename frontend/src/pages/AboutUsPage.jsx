import React, { useState, useRef } from 'react'
import { TextReveal } from '../components/TextReveal'
import { MotionValue, motion, useMotionTemplate, useScroll, useSpring, useTransform, useInView } from 'framer-motion'
import obj, { images } from '../data'
import { NavbarDemo } from '../components/NavbarDemo'
import { TimelineDemo } from '../components/TimeLineDemo'
import { EventCard } from '../components/Events'
import Footer from '../components/Footer'
import MaskEffect from '../components/MaskEffect'

const springVars = {
  stiffness: 100,
  damping: 30,
}

const events = [
  {
    eventName: "First Interaction",
    description: 'In late 2021, while casually scrolling through Instagram, Priyansh stumbled upon Garvit’s reel — a simple frame, a raw voice, and an energy that lingered. There was something unmistakably real in the way he sang — not just technical skill, but soul. Instantly drawn to the sincerity and spark in Garvit’s performance, Priyansh reached out with a message that would unknowingly shape their future: “Let’s collaborate on a cover?”',
    src: images.img4,
  },
  {
    eventName: "Interaction to first collab",
    description: 'That one reel turned into their first collaboration — a cover that resonated far and wide. But more than the numbers, it was the creative chemistry they discovered that stayed with them. Despite being miles apart — Priyansh in Germany, studying Mechanical Engineering, and Garvit in Baroda, pursuing Music and Economics at MSU — they began working together remotely. Over Zoom calls and audio notes, they wrote and produced their first original song, ‘Sanware,’ in just eight days.',
    src: images.anti_1
  },
  {
    eventName: "Sanware",
    description: 'Released in January 2022, Sanware was met with overwhelming love. The response was clear — they weren’t just two artists collaborating; they were meant to create together.',
    src: images.jw_1
  },
  {
    eventName: "Duo : Garvit - Priyansh",
    description: 'A few more songs followed, each deepening their connection and sharpening their shared vision. What began as a chance encounter became a purpose. In August 2022, they made a leap of faith — shifting to Mumbai, building their own studio, and officially forming the artist duo Garvit – Priyansh.',
    src: images.goa_1
  },

  {
    eventName: "One Passion , one purpose",
    description: 'Signed with T-Series , Released original songs paired with visually rich music videos ,Toured across India, performing live for audiences that connect with their stories ,And earned recognition and awards for their unique sound and storytelling',
    src: images.anti_6
  },
  {
    eventName: "Duo turned to bros",
    description: 'Today, Garvit – Priyansh stands as more than a music duo. They are storytellers, making musical genres into timeless melodies. What brought them together was a reel. What keeps them going is a shared belief — that music, when created with heart, can move the world.',
    src: images.image_two
  },

]

const AboutUsPage = () => {
  

  return (

    <div className='h-screen'>

      <NavbarDemo />

      <MaskEffect />


      <motion.div className='relative text-white min-h-screen w-full' >



        <div className='absolute w-full p-6'>

          <h1 className='text-black font-bold text-4xl text-center p-4 m-auto w-[60%] bg-gradient-to-r from-red-600 via-blue-400 to-blue-800 bg-clip-text text-transparent' style={{ zIndex: "99999" }}>Some journeys begin with a single step. Ours began with a single reel.</h1>

          {/* <p className='text-black font-bold max-w-8xl text-center text-lg p-4 text-stone-500'>

           <span className=''> Some journeys begin with a single step. Ours began with a single reel.

            In late 2021, while casually scrolling through Instagram, Priyansh stumbled upon Garvit’s reel — a simple frame, a raw voice, and an energy that lingered. There was something unmistakably real in the way he sang — not just technical skill, but soul. Instantly drawn to the sincerity and spark in Garvit’s performance, Priyansh reached out with a message that would unknowingly shape their future: “Let’s collaborate on a cover?”</span> <br/> <br/>

            <span className=''>
              That one reel turned into their first collaboration — a cover that resonated far and wide. But more than the numbers, it was the creative chemistry they discovered that stayed with them. Despite being miles apart — Priyansh in Germany, studying Mechanical Engineering, and Garvit in Baroda, pursuing Music and Economics at MSU — they began working together remotely. Over Zoom calls and audio notes, they wrote and produced their first original song, ‘Sanware,’ in just eight days.
              </span> <br/> <br/>

            Released in January 2022, Sanware was met with overwhelming love. The response was clear — they weren’t just two artists collaborating; they were meant to create together. <br/> <br/>

            A few more songs followed, each deepening their connection and sharpening their shared vision. What began as a chance encounter became a purpose. In August 2022, they made a leap of faith — shifting to Mumbai, building their own studio, and officially forming the artist duo Garvit – Priyansh. <br/> <br/>

            Since then, their journey has been one of passion, perseverance, and purpose. They have: <br/> <br/>

            <span className='text-red-500'>Signed with T-Series</span> , 

            <span className='text-blue-500'>Released original songs paired with visually rich music videos</span> , 

            <span className='text-violet-500'>Toured across India, performing live for audiences that connect with their stories</span> and

            <span className='text-orange-500'> earned recognition and awards for their unique sound and storytelling</span>

            <br/> <br/>

            Today, Garvit – Priyansh stands as more than a music duo. They are storytellers, making musical genres into timeless melodies. What brought them together was a reel. What keeps them going is a shared belief — that music, when created with heart, can move the world.

          </p> */}


{/* https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80 */}
          
            <div
              className="relative max-w-4xl m-auto rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
              style={{
                backgroundImage: `url(${images.img5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Crystal glass overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-lg border border-white/10">
                {/* Multi-layer glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>

                {/* Subtle shimmer animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <p className='text-white font-bold max-w-full text-center text-lg p-6 leading-relaxed drop-shadow-lg'>
                  <span className='block mb-6'>
                    Some journeys begin with a single step. Ours began with a single reel.
                    In late 2021, while casually scrolling through Instagram, Priyansh stumbled upon Garvit's reel — a simple frame, a raw voice, and an energy that lingered. There was something unmistakably real in the way he sang — not just technical skill, but soul. Instantly drawn to the sincerity and spark in Garvit's performance, Priyansh reached out with a message that would unknowingly shape their future: "Let's collaborate on a cover?"
                  </span>

                  <span className='block mb-6'>
                    That one reel turned into their first collaboration — a cover that resonated far and wide. But more than the numbers, it was the creative chemistry they discovered that stayed with them. Despite being miles apart — Priyansh in Germany, studying Mechanical Engineering, and Garvit in Baroda, pursuing Music and Economics at MSU — they began working together remotely. Over Zoom calls and audio notes, they wrote and produced their first original song, 'Sanware,' in just eight days.
                  </span>

                  <span className='block mb-6'>
                    Released in January 2022, Sanware was met with overwhelming love. The response was clear — they weren't just two artists collaborating; they were meant to create together.
                  </span>

                  <span className='block mb-6'>
                    A few more songs followed, each deepening their connection and sharpening their shared vision. What began as a chance encounter became a purpose. In August 2022, they made a leap of faith — shifting to Mumbai, building their own studio, and officially forming the artist duo Garvit – Priyansh.
                  </span>

                  <span className='block mb-6'>
                    Since then, their journey has been one of passion, perseverance, and purpose. They have:
                  </span>

                  <span className='block mb-6'>
                    <span className='text-red-400 font-extrabold drop-shadow-md'>Signed with T-Series</span>, {' '}
                    <span className='text-blue-400 font-extrabold drop-shadow-md'>Released original songs paired with visually rich music videos</span>, {' '}
                    <span className='text-violet-400 font-extrabold drop-shadow-md'>Toured across India, performing live for audiences that connect with their stories</span> and {' '}
                    <span className='text-orange-400 font-extrabold drop-shadow-md'>earned recognition and awards for their unique sound and storytelling</span>
                  </span>

                  <span className='block'>
                    Today, Garvit – Priyansh stands as more than a music duo. They are storytellers, making musical genres into timeless melodies. What brought them together was a reel. What keeps them going is a shared belief — that music, when created with heart, can move the world.
                  </span>
                </p>
              </div>

              {/* Decorative crystal elements */}
              <div className="absolute top-6 right-8 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>
              <div className="absolute top-12 right-12 w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-8 left-6 w-3 h-3 bg-white/25 rounded-full blur-sm"></div>
              <div className="absolute bottom-12 left-12 w-5 h-5 bg-white/15 rounded-full blur-md"></div>

              {/* Border highlight */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none"></div>

            </div>
         

        </div>


      








      </motion.div>

     
    </div>



  )
}

export default AboutUsPage
