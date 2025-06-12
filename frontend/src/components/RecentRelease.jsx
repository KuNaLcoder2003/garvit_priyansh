import React, { useState } from 'react'
import { images } from '../data'
import { ContainerScroll } from './ContainerScrollAnimation'
import { Confetti, ConfettiButton } from './Confetti'

const RecentRelease = () => {
  const [reveal, setReveal] = useState(false);

  return (
    //  <div className="bg-black text-white p-4 m-auto mt-10 rounded-2xl w-128 shadow-lg">

    //   <div className="absolute -top-2 -left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-md shadow-md z-10">
    //     Latest Release
    //   </div>
    //   {/* Album Art */}
    //   <div className="overflow-hidden rounded-xl">
    //     <img
    //       src={images.rr} // your image file
    //       alt="Where Are You Now"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>

    //   {/* Song Info */}
    //   <div className="mt-4">
    //     <p className="text-white font-semibold text-base leading-tight">
    //       Tu Vekheya
    //     </p>
    //     <p className="text-gray-400 text-sm mt-1 cursor-pointer">Listen Now</p>
    //   </div>
    // </div>

    <div className="bg-black text-white flex flex-col md:flex-row items-center md:items-start justify-between p-6 md:p-8 mt-10 mx-auto rounded-2xl w-[90%] max-w-5xl shadow-lg gap-6">
  {/* Album Image & Label */}
  <div className="relative w-full md:w-[40%] max-w-[300px]">
    {/* Tooltip/Label */}
    <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-md shadow">
      Latest Release
    </div>

    {/* Album Image */}
    <img
      src={images.tsv} // replace with your actual path
      alt="Where Are You Now"
      className="w-full h-auto rounded-xl object-cover shadow-md"
    />
  </div>

  {/* Song Info */}
  <div className="w-full md:w-[60%] flex flex-col justify-center text-center md:text-left items-baseline">
    <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl">
      Tu Sab Vekheya
    </h2>
    <div className='p-4 flex flex-col gap-6'>

      <div className='flex items-center gap-4'>
        <img  src='https://i.scdn.co/image/ab6761610000101fb9ab31e8839873a90a208143' className='w-[40px] h-[40px] rounded-full'/>
        <p>Garvit - Priyansh</p>
      </div>

      <div className='flex items-center gap-4'>
        <img  src='https://i.scdn.co/image/ab676161000051742edf28eb85c9758390ea20f5' className='w-[40px] h-[40px] rounded-full'/>
        <p>Hansika Pareek</p>
      </div>

    </div>
    <button 
    onClick={()=>window.open('https://open.spotify.com/album/35ldZRrH83VXMtjooYmXjk' , '_blank')}
     className="bg-gradient-to-r from-zinc-900 to-neutral-700 text-white font-bold p-2 w-[30%] rounded-lg text-center text-sm sm:text-base mt-3 cursor-pointer transition duration-200">
      <p className='text -center bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent'>Listen Now</p>
    </button>

    
  </div>
</div>
  )
}

// const CrystalContainer = () => {
//   return (
//     <div className="min-h-screen w-[90%] m-auto flex items-center justify-center p-4">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-72 h-72  rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-72 h-72  rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96  rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
//       </div>

//       {/* Crystal blur container */}
//       <div className="relative w-[90vw] mx-auto">
//         {/* Glass container with crystal blur effect */}
//         <div
//           className="relative w-[90%] h-auto m-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
//           style={{
//             // background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
//             boxShadow: '0 25px 45px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.1)',
//           }}
//         >
//           {/* Crystal reflections */}
//           <div className="absolute inset-0 opacity-30">
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
//             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
//             <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
//             <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full blur-sm"></div>
//           </div>

//           {/* Floating particles */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {[...Array(12)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   animationDelay: `${Math.random() * 3}s`,
//                   animationDuration: `${2 + Math.random() * 2}s`
//                 }}
//               ></div>
//             ))}
//           </div>

//           {/* Content container */}
//           <div className="relative z-10 p-8 h-full w-[90vw] flex items-center justify-center">
//             <div className="w-full">
//               <RecentRelease />
//             </div>
//           </div>

//           {/* Edge glow effect */}
//           <div className="absolute inset-0 rounded-3xl border border-white/30 pointer-events-none"></div>

//           {/* Corner highlights */}
//           <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-white/50 rounded-tl-lg"></div>
//           <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-white/50 rounded-tr-lg"></div>
//           <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></div>
//           <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-white/50 rounded-br-lg"></div>
//         </div>

//         {/* Outer glow */}
//         <div
//           className="absolute inset-0 rounded-3xl opacity-60 blur-lg -z-10"
//           style={{
//             background: 'linear-gradient(135deg, rgba(139,69,255,0.3), rgba(59,130,246,0.3), rgba(236,72,153,0.3))',
//           }}
//         ></div>
//       </div>
//     </div>
//   )
// }
export default RecentRelease
