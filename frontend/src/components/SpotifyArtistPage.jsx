

import { useEffect, useRef, useState } from 'react';
import {
  Play,
  Check,
  Heart,
  Shuffle,
  SkipBack,
  SkipForward,
  Pause,
  Maximize2,
  Volume2
} from 'lucide-react';

import obj from '../data';
import { useNavigate } from 'react-router-dom';



export default function SpotifyArtistPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0); // 2:35
  const [duration, setDuration] = useState(0)
  const [index, setIndex] = useState(0)

  const popularTracks = [
    { id: 1, title: 'Khwabon ke Rang', plays: '1,109,427', img: 'https://i.scdn.co/image/ab67616d00001e02ea6f4ed5ed91d1d4d4a17cc6' },
    { id: 2, title: 'Mere Ranjhana', plays: '767,711', img: 'https://i.scdn.co/image/ab67616d00001e029affc02726dab6d69ab76db4' },
    { id: 3, title: 'Sanware', plays: '2,470,176', img: 'https://i.scdn.co/image/ab67616d00001e02950868d5c0b9741965239d31' },
    { id: 4, title: 'Tu Azma', plays: '2,718,224', img: 'https://i.scdn.co/image/ab67616d00001e02a25647c61efcb54ad1d1707f' },
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };


  function handlePlay() {
    setIsPlaying(true)
    audioRef.current.play();

  }

  function handlePause() {
    setIsPlaying(false)
    audioRef.current.pause()
  }

  function handlePlayPause() {

    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }

  }

  function handleSeek(e) {
    audioRef.current.currentTime = e.target.value
    setCurrentTime(e.target.value)
  }

  function handleTimeUpdate() {
    setCurrentTime(audioRef.current.currentTime)
    setDuration(audioRef.current.duration)
  }

  // useEffect(() => {
  //   audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
  //   // return () => audioRef.current.removeEventListener('timeupdate' , handleTimeUpdate)
  // }, [])



  // function handleSongChange(index) {
  //   setIndex(index)
  //   handlePause();


  //   const playNew = async () => {

  //     await audioRef.current.load()

  //     handlePlay();
  //   }
  //   playNew();

  //   audioRef.current.addEventListener('loadmetadata', handleTimeUpdate)
  // }

  const navigate = useNavigate();


  return (

    <></>



    // <div
    //   className="bg-center bg-cover flex flex-col min-h-screen text-white font-sans relative"
    //   style={{ backgroundImage: `url(${obj.gp_spotify})` }}
    // >
    //   {/* Background overlay */}
    //   <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />

    //   {/* Scrollable Content */}
    //   <div className="flex-1 relative z-10 py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
    //     {/* Header */}
    //     <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
    //       <div className="flex items-center">
    //         <img src={obj.spotify} alt="Spotify logo" className="h-10" />
    //         <span className="ml-2 text-2xl sm:text-3xl font-bold">Spotify Stats</span>
    //       </div>
    //       <span className="text-xl sm:text-2xl font-bold text-center sm:text-right">Moody Mix</span>
    //     </div>

    //     {/* Artist Info */}
    //     <div className="text-center pt-12 pb-8">
    //       <div className="flex justify-center items-center space-x-2 mb-2">
    //         <div className="bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center">
    //           <Check size={12} className="text-white" />
    //         </div>
    //         <span className="text-gray-300 text-sm">Verified Artist</span>
    //       </div>

    //       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Garvit x Priyansh</h1>
    //       <p className="text-gray-300 text-sm mb-6">172,564 monthly listeners</p>

    //       <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
    //         <button className="bg-green-500 text-black px-6 py-2 rounded-full font-bold flex items-center">
    //           <Play size={16} className="mr-1" fill="black" />
    //           PLAY
    //         </button>
    //         <button className="border border-gray-600 px-6 py-2 rounded-full font-bold flex items-center">
    //           <Check size={16} className="mr-1" />
    //           FOLLOWING
    //         </button>
    //       </div>
    //     </div>

    //     {/* Tracks */}
    //     <div className="max-w-2xl mx-auto mb-24 md:mb-28 lg:mb-32 xl:mb-36">
    //       <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Popular</h2>
    //       <div className="flex flex-col gap-3 mb-6">
    //         {popularTracks.map((track, idx) => (
    //           <div
    //             key={track.id}
    //             onClick={() => handleSongChange(idx)}
    //             className="cursor-pointer flex items-center justify-between hover:bg-white/10 transition p-3 rounded"
    //           >
    //             <div className="flex items-center gap-4">
    //               <img src={track.img} alt={track.title} className="w-12 h-12 rounded object-cover" />
    //               <span className="font-medium text-sm sm:text-base">{track.title}</span>
    //             </div>
    //             <span className="text-gray-400 text-xs sm:text-sm font-bold">{track.plays}</span>
    //           </div>
    //         ))}
    //       </div>
    //       <button className="text-gray-400 text-sm font-medium hover:text-white transition text-center w-full" onClick={()=>navigate('/music')}>Show More</button>
    //     </div>
    //   </div>

    //   {/* Music Player */}
    //   <div className="relative w-full z-20">
    //     <div className="bg-black bg-opacity-95 border-t border-gray-800 px-4 py-4">
    //       <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-1">

    //         {/* Left: Like */}
    //         <div className="flex items-center w-full md:w-1/4 justify-center md:justify-start">
    //           {/* <Heart size={20} className="text-gray-400 mr-2" /> */}
    //         </div>

    //         <audio ref={audioRef} src={obj.songs[index]} />

    //         {/* Center: Controls */}
    //         <div className="flex flex-col items-center w-full md:w-2/4 px-2">
    //           <div className="flex items-center justify-center space-x-4 mb-2">
    //             <Shuffle size={18} className="text-gray-400" />
    //             <SkipBack size={18} className="text-gray-300" />
    //             <button
    //               className="bg-white rounded-full p-2"
    //               onClick={handlePlayPause}
    //             >
    //               {isPlaying
    //                 ? <Pause size={18} className="text-black" />
    //                 : <Play size={18} className="text-black" fill="black" />}
    //             </button>
    //             <SkipForward size={18} className="text-gray-300" />
    //             <Maximize2 size={18} className="text-gray-400" />
    //           </div>

    //           <div className="flex items-center justify-between space-x-2 w-full">
    //             <div className='flex items-center gap-4 flex-1'>
    //               <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
    //               <input
    //                 type="range"
    //                 onChange={handleSeek}
    //                 max={duration}
    //                 value={currentTime}
    //                 className="h-1 bg-green-500 rounded-full w-full"
    //               />
    //             </div>
    //             <span className="text-xs text-gray-400">{formatTime(duration)}</span>
    //           </div>
    //         </div>

    //         {/* Right: Volume */}
    //         <div className="flex items-center w-full md:w-1/4 justify-center md:justify-end space-x-2">
    //           {/* <Volume2 size={18} className="text-gray-300" /> */}
    //           {/* <div className="w-20 sm:w-24 h-1 bg-gray-700 rounded-full">
    //             <div className="w-3/4 h-1 bg-green-500 rounded-full" />
    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className='w-[100%] m-auto p-2'>
    //   {/* <iframe style={{}} className='rounded-0' src="https://open.spotify.com/embed/artist/6pYc4P7IWYwWttTPzYkDV4?utm_source=generator&theme=0" width="100%" height="600" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
    // </div>

  );
}





