// import { useState } from 'react';
// import { Play, Check, Heart, Shuffle, SkipBack, SkipForward, Pause, Maximize2, Volume2 } from 'lucide-react';
// import { SocialIcon } from 'react-social-icons'
// import obj from '../data';

// const SpotifyIcon = <SocialIcon url='https://open.spotify.com/' />

// export default function SpotifyArtistPage() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(155); // 2:35
//   const totalTime = 321; // 5:21

//   const popularTracks = [
//     { id: 1, title: 'Kagaz', plays: '1,812,421' , img : 'https://i.scdn.co/image/ab67616d00001e02784eaefd0ecc1e7f55b396a3' },
//     { id: 2, title: 'Mere Ranjhana', plays: '1,812,421' , img : 'https://i.scdn.co/image/ab67616d00001e029affc02726dab6d69ab76db4' },
//     { id: 3, title: 'Sanware', plays: '1,812,421' , img : 'https://i.scdn.co/image/ab67616d00001e02950868d5c0b9741965239d31' },
//     { id: 4, title: 'Tu Azma', plays: '1,812,421' , img : 'https://i.scdn.co/image/ab67616d00001e02a25647c61efcb54ad1d1707f' },
//   ];

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   return (
//     // bg-gradient-to-b from-blue-900 to-black min-h-screen text-white font-sans relative
//     <div className="bg-center bg-cover bg-y-20% min-h-screen text-white font-sans relative" style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/0582/0c15/5dbee31f1c42e395fba5d567d913f82d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M~VtE1P4vjjN3ebN9tMYns46Bcvnf5f1xuyVwLh0JABjZG32hHTmn3uzDRmw~oBVZTeK6R11xKwzq54atvpErCbChdEFC3ltgnnfk0HmmVJ-8PLrGVUVis~4lYor05B1-JN~vakPjNQzP86KcUuhgLuhTA1U8ey1q37uuClPtANfXL4RCXGo4wUAa85DsAXzwJoiodIqdDGAtoFCqnS4w0hJeI133mZzE0j4XLxgH8eeaxZtVrTVUD04Y82El4IY2WgDiUIeQFb4wpKyk5jxVqoH9hBAaWKW0~PcXDTW7GAvi2iol8OxFBx3Crn4CDK2~LvqseaiFLiqQhqkZMXUYQ__)` }}>
//       {/* Top Navigation */}
//       <div class="absolute inset-0 bg-black/50 z-0"></div>
//       <div className='relative py-6 z-10'>

//         <div className="p-6 flex justify-between items-center z-10">
//           <div className="flex items-center">
//             <img src={obj.spotify} alt="Spotify logo" className="h-10" />
//             <span className="text-white text-3xl font-bold ml-2">Spotify Stats</span>
//           </div>
//           <div className="text-right">
//             <span className="text-white text-2xl font-bold">Moody Mix</span>
//           </div>
//         </div>

//         {/* Artist Header */}
//         <div className="px-8 pt-16 pb-8 z-10 flex flex-col items-center">
//           <div className="flex items-center space-x-2 mb-2">
//             <div className="bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center">
//               <Check size={12} className="text-white" />
//             </div>
//             <span className="text-gray-300 text-sm">Verified Artist</span>
//           </div>

//           <h1 className="text-5xl font-bold mb-2">Garvit x Priyansh</h1>
//           <div className="text-gray-300 text-sm mb-6">
//             <span>172,564 monthly listeners</span>
//           </div>

//           <div className="flex space-x-4">
//             <button className="bg-green-500 text-black px-6 py-2 rounded-full font-bold flex items-center">
//               <Play size={16} className="mr-1" fill="black" />
//               PLAY
//             </button>
//             <button className="border border-gray-600 px-6 py-2 rounded-full font-bold flex items-center">
//               <Check size={16} className="mr-1" />
//               FOLLOWING
//             </button>
//           </div>
//         </div>

//         {/* Popular Tracks */}
//         <div className="px-8">
//           <h2 className="text-xl font-bold mb-4 text-center">Popular</h2>

//           <div className="flex flex-col gap-3 mb-6 w-full lg:w-[30%] md:m-auto md:my-8 lg:my-4">
//             {popularTracks.map((track) => (
//               <div
//                 key={track.id}
//                 className="flex items-center justify-between hover:bg-white/10 transition p-3 rounded"
//               >
//                 {/* Left side: Image + Title */}
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={track.img}
//                     alt={`${track.title} cover`}
//                     className="w-12 h-12 object-cover rounded"
//                   />
//                   <span className="font-medium text-white">
//                     { track.title}
//                   </span>
//                 </div>

//                 {/* Right side: Plays */}
//                 <span className="text-gray-400 text-lg font-bold">{track.plays}</span>
//               </div>
//             ))}
//           </div>

//           <button className="text-gray-400 mt-4 text-sm font-medium hover:text-white transition">
//             Show More
//           </button>
//         </div>



//         {/* Player Controls - Fixed at bottom */}
//         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-95 border-t border-gray-800 px-4 py-3">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center w-1/4">
//               <Heart size={20} className="text-gray-400 mr-2" />
//             </div>

//             <div className="flex flex-col items-center w-2/4">
//               <div className="flex items-center justify-center space-x-6 mb-2">
//                 <Shuffle size={18} className="text-gray-400" />
//                 <SkipBack size={18} className="text-gray-300" />
//                 <button
//                   className="bg-white rounded-full p-2"
//                   onClick={() => setIsPlaying(!isPlaying)}
//                 >
//                   {isPlaying ?
//                     <Pause size={18} className="text-black" /> :
//                     <Play size={18} className="text-black" fill="black" />
//                   }
//                 </button>
//                 <SkipForward size={18} className="text-gray-300" />
//                 <Maximize2 size={18} className="text-gray-400" />
//               </div>

//               <div className="w-full flex items-center space-x-2">
//                 <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
//                 <div className="flex-1 h-1 bg-gray-700 rounded-full">
//                   <div
//                     className="h-1 bg-green-500 rounded-full"
//                     style={{ width: `${(currentTime / totalTime) * 100}%` }}
//                   ></div>
//                 </div>
//                 <span className="text-xs text-gray-400">{formatTime(totalTime)}</span>
//               </div>
//             </div>

//             <div className="flex items-center justify-end w-1/4 space-x-3">
//               <Volume2 size={18} className="text-gray-300" />
//               <div className="w-24 h-1 bg-gray-700 rounded-full">
//                 <div className="w-3/4 h-1 bg-green-500 rounded-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
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
import { SocialIcon } from 'react-social-icons';
import obj from '../data';

export default function SpotifyArtistPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(155); // 2:35
  const totalTime = 321; // 5:21

  const popularTracks = [
    { id: 1, title: 'Kagaz', plays: '1,812,421', img: 'https://i.scdn.co/image/ab67616d00001e02784eaefd0ecc1e7f55b396a3' },
    { id: 2, title: 'Mere Ranjhana', plays: '1,812,421', img: 'https://i.scdn.co/image/ab67616d00001e029affc02726dab6d69ab76db4' },
    { id: 3, title: 'Sanware', plays: '1,812,421', img: 'https://i.scdn.co/image/ab67616d00001e02950868d5c0b9741965239d31' },
    { id: 4, title: 'Tu Azma', plays: '1,812,421', img: 'https://i.scdn.co/image/ab67616d00001e02a25647c61efcb54ad1d1707f' },
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-center bg-cover min-h-screen text-white font-sans relative" style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/0582/0c15/5dbee31f1c42e395fba5d567d913f82d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M~VtE1P4vjjN3ebN9tMYns46Bcvnf5f1xuyVwLh0JABjZG32hHTmn3uzDRmw~oBVZTeK6R11xKwzq54atvpErCbChdEFC3ltgnnfk0HmmVJ-8PLrGVUVis~4lYor05B1-JN~vakPjNQzP86KcUuhgLuhTA1U8ey1q37uuClPtANfXL4RCXGo4wUAa85DsAXzwJoiodIqdDGAtoFCqnS4w0hJeI133mZzE0j4XLxgH8eeaxZtVrTVUD04Y82El4IY2WgDiUIeQFb4wpKyk5jxVqoH9hBAaWKW0~PcXDTW7GAvi2iol8OxFBx3Crn4CDK2~LvqseaiFLiqQhqkZMXUYQ__)` }}>
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 py-6 px-4 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={obj.spotify} alt="Spotify logo" className="h-10" />
            <span className="ml-2 text-3xl font-bold">Spotify Stats</span>
          </div>
          <span className="text-2xl font-bold">Moody Mix</span>
        </div>

        {/* Artist Info */}
        <div className="text-center pt-12 pb-8">
          <div className="flex justify-center items-center space-x-2 mb-2">
            <div className="bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center">
              <Check size={12} className="text-white" />
            </div>
            <span className="text-gray-300 text-sm">Verified Artist</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Garvit x Priyansh</h1>
          <p className="text-gray-300 text-sm mb-6">172,564 monthly listeners</p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-500 text-black px-6 py-2 rounded-full font-bold flex items-center">
              <Play size={16} className="mr-1" fill="black" />
              PLAY
            </button>
            <button className="border border-gray-600 px-6 py-2 rounded-full font-bold flex items-center">
              <Check size={16} className="mr-1" />
              FOLLOWING
            </button>
          </div>
        </div>

        {/* Tracks */}
        <div className="max-w-xl mx-auto mb-[6rem] 3xl:mb-0">
          <h2 className="text-xl font-bold mb-4 text-center">Popular</h2>
          <div className="flex flex-col gap-3 mb-6">
            {popularTracks.map((track) => (
              <div key={track.id} className="flex items-center justify-between hover:bg-white/10 transition p-3 rounded">
                <div className="flex items-center gap-4">
                  <img src={track.img} alt={track.title} className="w-12 h-12 rounded object-cover" />
                  <span className="font-medium">{track.title}</span>
                </div>
                <span className="text-gray-400 text-sm font-bold">{track.plays}</span>
              </div>
            ))}
          </div>
          <button className="text-gray-400 text-sm font-medium hover:text-white transition text-center w-full">Show More</button>
        </div>

        {/* Music Player */}
        {/* Music Player Wrapper */}
        <div className="relative w-full mt-[2rem] 3xl:mt-0">
          <div className="absolute h-auto bottom-[-1rem] 3xl:bottom-[-21.2rem] left-0 right-0 bg-black bg-opacity-95 border-t border-gray-800 px-4 py-4 z-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

              {/* Left: Like button */}
              <div className="flex items-center md:w-1/4 justify-center md:justify-start">
                <Heart size={20} className="text-gray-400 mr-2" />
              </div>

              {/* Center: Controls + Progress */}
              <div className="flex flex-col items-center md:w-2/4 w-full px-2">
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <Shuffle size={18} className="text-gray-400" />
                  <SkipBack size={18} className="text-gray-300" />
                  <button
                    className="bg-white rounded-full p-2"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying
                      ? <Pause size={18} className="text-black" />
                      : <Play size={18} className="text-black" fill="black" />}
                  </button>
                  <SkipForward size={18} className="text-gray-300" />
                  <Maximize2 size={18} className="text-gray-400" />
                </div>

                <div className="flex items-center space-x-2 w-full">
                  <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
                  <div className="flex-1 h-1 bg-gray-700 rounded-full">
                    <div className="h-1 bg-green-500 rounded-full" style={{ width: `${(currentTime / totalTime) * 100}%` }} />
                  </div>
                  <span className="text-xs text-gray-400">{formatTime(totalTime)}</span>
                </div>
              </div>

              {/* Right: Volume */}
              <div className="flex items-center md:w-1/4 justify-center md:justify-end space-x-2">
                <Volume2 size={18} className="text-gray-300" />
                <div className="w-20 sm:w-24 h-1 bg-gray-700 rounded-full">
                  <div className="w-3/4 h-1 bg-green-500 rounded-full" />
                </div>
              </div>

            </div>
          </div>
        </div>



      </div>
    </div>
  );
}



// import { useState } from 'react';
// import {
//   Play, Check, Heart, Shuffle, SkipBack, SkipForward,
//   Pause, Maximize2, Volume2, Home, Search, Library
// } from 'lucide-react';

// export default function SpotifyArtistPage() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(155); // 2:35
//   const totalTime = 321; // 5:21

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   const dummyAlbums = [
//     { id: 1, name: "Waves", artist: "Garvit", cover: "https://source.unsplash.com/200x200/?music,album" },
//     { id: 2, name: "Echoes", artist: "Priyansh", cover: "https://source.unsplash.com/200x200/?vinyl" },
//     { id: 3, name: "Chords", artist: "Garvit x Priyansh", cover: "https://source.unsplash.com/200x200/?guitar" },
//   ];

//   const dummyQueue = [
//     "Madhanya", "Bekhayali", "Mann Bharrya", "Tu Hi Re", "Tere Bina"
//   ];

//   return (
//     <div className="flex min-h-screen bg-black text-white font-sans">

//       {/* Sidebar */}
//       <aside className="w-60 bg-[#121212] p-6 space-y-6 hidden md:block">
//         <h1 className="text-2xl font-bold mb-4">Spotify</h1>
//         <nav className="space-y-4 text-gray-400">
//           <div className="flex items-center gap-2"><Home size={18} /> Home</div>
//           <div className="flex items-center gap-2"><Search size={18} /> Search</div>
//           <div className="flex items-center gap-2"><Library size={18} /> Your Library</div>
//           <hr className="border-gray-700 my-4" />
//           <div>Create Playlist</div>
//           <div>Liked Songs</div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto">
//         {/* Banner */}
//         <section className="bg-gradient-to-b from-blue-900 to-black px-6 pt-6 pb-12">
//           <div className="text-center">
//             <p className="uppercase text-sm text-gray-300 tracking-widest">Verified Artist</p>
//             <h1 className="text-5xl font-bold">Garvit x Priyansh</h1>
//             <p className="text-gray-400 mt-2">172,564 monthly listeners</p>
//             <div className="mt-6 flex justify-center gap-4">
//               <button className="bg-green-500 text-black px-6 py-2 rounded-full font-bold flex items-center">
//                 <Play size={16} className="mr-1" fill="black" /> PLAY
//               </button>
//               <button className="border border-gray-600 px-6 py-2 rounded-full font-bold flex items-center">
//                 <Check size={16} className="mr-1" /> FOLLOWING
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Recently Played */}
//         <section className="px-6 py-4">
//           <h2 className="text-xl font-bold mb-4">Recently Played</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {dummyAlbums.map(album => (
//               <div key={album.id} className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">
//                 <img src={album.cover} alt={album.name} className="w-full h-40 object-cover rounded mb-2" />
//                 <h3 className="text-lg font-semibold">{album.name}</h3>
//                 <p className="text-sm text-gray-400">{album.artist}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Recommended */}
//         <section className="px-6 py-4">
//           <h2 className="text-xl font-bold mb-4">Recommended For You</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {[...dummyAlbums, ...dummyAlbums].map((album, idx) => (
//               <div key={idx} className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition">
//                 <img src={album.cover} alt={album.name} className="w-full h-40 object-cover rounded mb-2" />
//                 <h3 className="text-lg font-semibold">{album.name}</h3>
//                 <p className="text-sm text-gray-400">{album.artist}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Queue */}
//         <section className="px-6 py-4">
//           <h2 className="text-xl font-bold mb-4">Your Queue</h2>
//           <ul className="space-y-2">
//             {dummyQueue.map((song, index) => (
//               <li key={index} className="bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition">
//                 {index + 1}. {song}
//               </li>
//             ))}
//           </ul>
//         </section>

//         {/* Footer */}
//         <footer className="text-center py-8 text-sm text-gray-400">
//           © 2025 Garvit x Priyansh — All rights reserved.
//         </footer>
//       </main>

//       {/* Player Controls */}
//       <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 px-4 py-3">
//         <div className="flex justify-between items-center">
//           <div className="w-1/4">
//             <Heart size={20} className="text-gray-400" />
//           </div>
//           <div className="w-2/4 flex flex-col items-center">
//             <div className="flex items-center space-x-6 mb-2">
//               <Shuffle size={18} className="text-gray-400" />
//               <SkipBack size={18} className="text-gray-300" />
//               <button
//                 className="bg-white rounded-full p-2"
//                 onClick={() => setIsPlaying(!isPlaying)}
//               >
//                 {isPlaying ? <Pause size={18} className="text-black" /> : <Play size={18} className="text-black" />}
//               </button>
//               <SkipForward size={18} className="text-gray-300" />
//               <Maximize2 size={18} className="text-gray-400" />
//             </div>
//             <div className="w-full flex items-center space-x-2">
//               <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
//               <div className="flex-1 h-1 bg-gray-700 rounded-full">
//                 <div
//                   className="h-1 bg-green-500 rounded-full"
//                   style={{ width: `${(currentTime / totalTime) * 100}%` }}
//                 />
//               </div>
//               <span className="text-xs text-gray-400">{formatTime(totalTime)}</span>
//             </div>
//           </div>
//           <div className="w-1/4 flex justify-end items-center space-x-3">
//             <Volume2 size={18} className="text-gray-300" />
//             <div className="w-24 h-1 bg-gray-700 rounded-full">
//               <div className="w-3/4 h-1 bg-green-500 rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

