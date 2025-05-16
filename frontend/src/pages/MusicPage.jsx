
import MusicGallery from '../components/MusicGallery'
import { GoogleGeminiEffect } from '../components/GoogleGeminiEffect'
import { NavbarDemo } from '../components/NavbarDemo'
import Footer from '../components/Footer'
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocation } from 'react-router-dom';

import MusicReleaseCards from '../components/MusicReleaseCards';

const useOutsideClick = (
    ref,
    callback
) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};

// export function ExpandableCardDemo() {
//     const [active, setActive] = useState(null);
//     const id = useId();
//     const ref = useRef(null);

//     useEffect(() => {
//         function onKeyDown(event) {
//             if (event.key === "Escape") {
//                 setActive(false);
//             }
//         }

//         if (active && typeof active === "object") {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "auto";
//         }

//         window.addEventListener("keydown", onKeyDown);
//         return () => window.removeEventListener("keydown", onKeyDown);
//     }, [active]);

//     useOutsideClick(ref, () => setActive(null));

//     return (
//         <>
//             <AnimatePresence>
//                 {active && typeof active === "object" && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 bg-black/20 h-full w-full z-10" />
//                 )}
//             </AnimatePresence>
//             <AnimatePresence>
//                 {active && typeof active === "object" ? (
//                     <div className="fixed inset-0  grid place-items-center z-[100]">
//                         <motion.button
//                             key={`button-${active.title}-${id}`}
//                             layout
//                             initial={{
//                                 opacity: 0,
//                             }}
//                             animate={{
//                                 opacity: 1,
//                             }}
//                             exit={{
//                                 opacity: 0,
//                                 transition: {
//                                     duration: 0.05,
//                                 },
//                             }}
//                             className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
//                             onClick={() => setActive(null)}>
//                             <CloseIcon />
//                         </motion.button>
//                         <motion.div
//                             layoutId={`card-${active.title}-${id}`}
//                             ref={ref}
//                             className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
//                             <motion.div layoutId={`image-${active.title}-${id}`}>
//                                 <img
//                                     width={200}
//                                     height={200}
//                                     src={active.src}
//                                     alt={active.title}
//                                     className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
//                             </motion.div>

//                             <div>
//                                 <div className="flex justify-between items-start p-4">
//                                     <div className="">
//                                         <motion.h3
//                                             layoutId={`title-${active.title}-${id}`}
//                                             className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
//                                             {active.title}
//                                         </motion.h3>
//                                         <motion.p
//                                             layoutId={`description-${active.description}-${id}`}
//                                             className="text-neutral-600 dark:text-neutral-400 text-base">
//                                             {active.description}
//                                         </motion.p>
//                                     </div>

//                                     <motion.a
//                                         layout
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         exit={{ opacity: 0 }}
//                                         href={active.ctaLink}
//                                         target="_blank"
//                                         className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
//                                         {active.ctaText}
//                                     </motion.a>
//                                 </div>
//                                 <div className="pt-4 relative px-4">
//                                     <motion.div
//                                         layout
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         exit={{ opacity: 0 }}
//                                         className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
//                                         {typeof active.content === "function"
//                                             ? active.content()
//                                             : active.content}
//                                     </motion.div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 ) : null}
//             </AnimatePresence>
//             <ul
//                 className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
//                 {cards.map((card, index) => (
//                     <motion.div
//                         layoutId={`card-${card.title}-${id}`}
//                         key={card.title}
//                         onClick={() => setActive(card)}
//                         className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
//                         <div className="flex gap-4 flex-col  w-full">
//                             <motion.div layoutId={`image-${card.title}-${id}`}>
//                                 <img
//                                     width={100}
//                                     height={100}
//                                     src={card.src}
//                                     alt={card.title}
//                                     className="h-60 w-full  rounded-lg object-cover object-top" />
//                             </motion.div>
//                             <div className="flex justify-center items-center flex-col">
//                                 <motion.h3
//                                     layoutId={`title-${card.title}-${id}`}
//                                     className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
//                                     {card.title}
//                                 </motion.h3>
//                                 <motion.p
//                                     layoutId={`description-${card.description}-${id}`}
//                                     className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
//                                     {card.description}
//                                 </motion.p>
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </ul>
//         </>
//     );
// }

// export const CloseIcon = () => {
//     return (
//         <motion.svg
//             initial={{
//                 opacity: 0,
//             }}
//             animate={{
//                 opacity: 1,
//             }}
//             exit={{
//                 opacity: 0,
//                 transition: {
//                     duration: 0.05,
//                 },
//             }}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="h-4 w-4 text-black">
//             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//             <path d="M18 6l-12 12" />
//             <path d="M6 6l12 12" />
//         </motion.svg>
//     );
// };

// const cards = [
//     {
//         description: "Lana Del Rey",
//         title: "Summertime Sadness",
//         src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
//         ctaText: "Visit",
//         ctaLink: "https://ui.aceternity.com/templates",
//         content: () => {
//             return (
//                 <p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//                     her melancholic and cinematic music style. Born Elizabeth Woolridge
//                     Grant in New York City, she has captivated audiences worldwide with
//                     her haunting voice and introspective lyrics. <br /> <br />Her songs
//                     often explore themes of tragic romance, glamour, and melancholia,
//                     drawing inspiration from both contemporary and vintage pop culture.
//                     With a career that has seen numerous critically acclaimed albums, Lana
//                     Del Rey has established herself as a unique and influential figure in
//                     the music industry, earning a dedicated fan base and numerous
//                     accolades.
//                 </p>
//             );
//         },
//     },
//     {
//         description: "Babbu Maan",
//         title: "Mitran Di Chhatri",
//         src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
//         ctaText: "Visit",
//         ctaLink: "https://ui.aceternity.com/templates",
//         content: () => {
//             return (
//                 <p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
//                     voice and profound lyrics that resonate deeply with his audience. Born
//                     in the village of Khant Maanpur in Punjab, India, he has become a
//                     cultural icon in the Punjabi music industry. <br /> <br />His songs
//                     often reflect the struggles and triumphs of everyday life, capturing
//                     the essence of Punjabi culture and traditions. With a career spanning
//                     over two decades, Babu Maan has released numerous hit albums and
//                     singles that have garnered him a massive fan following both in India
//                     and abroad.
//                 </p>
//             );
//         },
//     },

//     {
//         description: "Metallica",
//         title: "For Whom The Bell Tolls",
//         src: "https://assets.aceternity.com/demos/metallica.jpeg",
//         ctaText: "Visit",
//         ctaLink: "https://ui.aceternity.com/templates",
//         content: () => {
//             return (
//                 <p>Metallica, an iconic American heavy metal band, is renowned for their
//                     powerful sound and intense performances that resonate deeply with
//                     their audience. Formed in Los Angeles, California, they have become a
//                     cultural icon in the heavy metal music industry. <br /> <br />Their
//                     songs often reflect themes of aggression, social issues, and personal
//                     struggles, capturing the essence of the heavy metal genre. With a
//                     career spanning over four decades, Metallica has released numerous hit
//                     albums and singles that have garnered them a massive fan following
//                     both in the United States and abroad.
//                 </p>
//             );
//         },
//     },
//     {
//         description: "Lord Himesh",
//         title: "Aap Ka Suroor",
//         src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
//         ctaText: "Visit",
//         ctaLink: "https://ui.aceternity.com/templates",
//         content: () => {
//             return (
//                 <p>Himesh Reshammiya, a renowned Indian music composer, singer, and
//                     actor, is celebrated for his distinctive voice and innovative
//                     compositions. Born in Mumbai, India, he has become a prominent figure
//                     in the Bollywood music industry. <br /> <br />His songs often feature
//                     a blend of contemporary and traditional Indian music, capturing the
//                     essence of modern Bollywood soundtracks. With a career spanning over
//                     two decades, Himesh Reshammiya has released numerous hit albums and
//                     singles that have garnered him a massive fan following both in India
//                     and abroad.
//                 </p>
//             );
//         },
//     },
// ];

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top whenever the pathname changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};


const MusicPage = () => {

    const tracks = [
        {
            id: 1,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e02a25647c61efcb54ad1d1707f',
            song: 'Tu Aazma',
            release: '2023',
            duration: '3:18',
            plays: '2,701,338',
            gradient: 'bg-gradient-to-r from-neutral-300 to-stone-400 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-neutral-300 to-stone-400' , 
            link : 'https://open.spotify.com/track/38CMq8hlI8zIzGbENBBG1P'
        },
        {
            id: 2,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e02784eaefd0ecc1e7f55b396a3',
            song: 'Kagaz',
            release: '2024',
            duration: '3:33',
            plays: '437,386',
            gradient: 'bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-amber-500 to-pink-500',
            link : 'https://open.spotify.com/track/7kF41c0FB7LJMs6ilrWqt2'


        },
        {
            id: 3,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e02950868d5c0b9741965239d31',
            song: 'Sanware',
            release: '2022',
            duration: '4:57',
            plays: '2,457,166',
            gradient: 'bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-emerald-500 to-emerald-900' , 
            link : 'https://open.spotify.com/track/4qBHgJWDMuWhgWwp2FFz7z'

        } , 
        {
            id: 4,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e029affc02726dab6d69ab76db4',
            song: 'Mere Ranjhana',
            release: '2023',
            duration: '3:42',
            plays: '765,663',
            gradient: 'bg-gradient-to-r from-rose-600 via-violet-600 to-cyan-800 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-rose-600 via-violet-600 to-cyan-800',
            link : 'https://open.spotify.com/track/04Oswb5okIbIzMyKVBSbMH'

        }, 
        {
            id: 5,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e02ea6f4ed5ed91d1d4d4a17cc6',
            song: 'Khwabon ke Rang',
            release: '2023',
            duration: '3:36',
            plays: '1,108,292',
            gradient: 'bg-gradient-to-r from-rose-400 via-pink-400 to-pink-500 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-rose-400 via-pink-400 to-pink-500',
            link : 'https://open.spotify.com/track/56QZnxULNrDzV7ueQLqlXo'

        },
        {
            id: 6,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e024d2ddf0ce166bbf6a54e6513',
            song: 'Uska Pata',
            release: '2025',
            duration: '3:49',
            plays: '145,746',
            gradient: 'bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-stone-500 to-stone-700',
            link : 'https://open.spotify.com/track/7es4VRgmTZ8dmuiz1Mm5HO'

        }
        ,{
            id: 7,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e02ea2dbff5ffcc23917f516c78',
            song: 'Jiya Mera',
            release: '2024',
            duration: '2:45',
            plays: '558,638',
            gradient: 'bg-gradient-to-l from-violet-700 via-pink-600 to-purple-800 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-l from-violet-700 via-pink-600 to-purple-800',
            links : 'https://open.spotify.com/track/5aADfE5q0L9RXSxXNz0r2X'

        } , 
        {
            id: 8,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e02cd7ae79baa4cc827d449b20f',
            song: 'Asan Nahi',
            release: '2024',
            duration: '3:26',
            plays: '138,608',
            gradient: 'bg-gradient-to-r from-sky-200 via-sky-800 to-blue-300 bg-clip-text text-transparent',
            gradientBtn : 'bg-gradient-to-r from-sky-200 via-sky-800 to-blue-300',
            link : 'https://open.spotify.com/track/6DVYiXQW2OYRh8mZjpbMKu'

        } ,
        {
            id: 9,
            thumbnail: 'https://i.scdn.co/image/ab67616d00001e020ab2e17ebf540e4c8f2a1412',
            song: 'Faasle',
            release: '2025',
            duration: '3:32',
            plays: '71,364',
            gradient: 'bg-gradient-to-r from-zinc-200 via-zinc-700 to-zinc-200 bg-clip-text text-transparent' , 
            gradientBtn : 'bg-gradient-to-r from-zinc-200 via-zinc-700 to-zinc-200',
            link : 'https://open.spotify.com/track/2sUCQRozz4pBXmjhbFLzCj'

        },
        

    ]


    return (
        <>
            <ScrollToTop />
            <NavbarDemo />
            <GoogleGeminiEffect />
            <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 w-full">
                {
                    tracks.map((track) => (
                        <MusicReleaseCards obj={track} key={track.id} />
                    ))
                }
            </div>
            <Footer />
        </>
    )
}

export default MusicPage
