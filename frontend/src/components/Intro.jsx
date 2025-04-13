import React from 'react'
import { cn } from '../utils'
import {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect,
} from 'react'

import obj from "../data"
import { motion } from 'framer-motion'
// const items = [{
//     name: 'Composers',
//     quote: 'jhdgunkdfiowqknfodfkndj mdwuvmds vjidsnvjsdvm sidkmnq9qewkjipsdjkv',
//     title: 'dhfiodj'
// }]
const data = [
    {
        img: obj.saxophone,
        head: "Musicians",
        text: "We express what words can't - through rythm , harmony and soul",
    },
    {
        img: obj.guitar,
        head: "Composers",
        text: "We craft melodies from emotions, turning moments into music"
    },
    {
        img: obj.bagpipes,
        head: "Artists",
        text: "We create experiences that stay with you - far beyond the last note"
    }
]
const Intro = () => {
    return (
        <div id='about' className='w-full h-auto p-2'>

            <h2 className='text-3xl font-bold text-slate-600 relative top-8 w-[50%] left-[85px]'>Garvit - Priyansh are </h2>


            {/* <div className='flex w-full items-center gap-[10px] justify-center overflow-hidden flex-wrap'>

                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Composers
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            We Love composing music
                        </CardItem>
                        <CardItem
                            translateZ="100"
                            rotateX={20}
                            rotateZ={-10}
                            className="w-full mt-4"
                        >
                            <img
                                src={obj.about}
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                translateX={-40}
                                as="button"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Reach out →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                translateX={40}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                See our work
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>

                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Singers
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            We sing pretty good
                        </CardItem>
                        <CardItem
                            translateZ="100"
                            rotateX={20}
                            rotateZ={-10}
                            className="w-full mt-4"
                        >
                            <img
                                src={obj.about}
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                translateX={-40}
                                as="button"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Listen →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                translateX={40}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                See our releases
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>

                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Artists
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Crafting good music is our art
                        </CardItem>
                        <CardItem
                            translateZ="100"
                            rotateX={20}
                            rotateZ={-10}
                            className="w-full mt-4"
                        >
                            <img
                                src={obj.about}
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                translateX={-40}
                                as="button"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Wtach us →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                translateX={40}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Our profile
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>


            </div> */}

            <InfiniteMovingCards items={data} className='w-[100%] m-auto p-4 mt-[2rem]' />



        </div>
    )
}


const MouseEnterContext = createContext(undefined)


export const CardContainer = ({
    children,
    className,
    containerClassName,
}) => {
    const containerRef = useRef(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = (e) => {
        setIsMouseEntered(true);
        if (!containerRef.current) return;
    };

    const handleMouseLeave = (e) => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 1 }}
                className={cn(
                    "py-20 flex items-center justify-center",
                    containerClassName
                )}
                style={{
                    perspective: "1000px",
                }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "flex items-center justify-center relative transition-all duration-200 ease-linear",
                        className
                    )}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {children}
                </div>
            </motion.div>
        </MouseEnterContext.Provider>
    );
};

export const CardBody = ({
    children,
    className,
}) => {
    return (
        <div
            className={cn(
                "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardItem = ({
    as: Tag = "div",
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}) => {
    const ref = useRef(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
        handleAnimations();
    }, [isMouseEntered]);

    const handleAnimations = () => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        }
    };

    return (
        <Tag
            ref={ref}
            className={cn("w-fit transition duration-200 ease-linear", className)}
            {...rest}
        >
            {children}
        </Tag>
    );
};

// Create a hook to use the context
export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};

const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}

) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className={`relative min-w-[320px] min-h-[250px] shrink-0 rounded-2xl border border-b-0 border-zinc-200 px-8 py-6 md:w-[200px] dark:border-zinc-700 ${
                            idx == 0 ? 'bg-indigo-500 text-white' : 
                            idx == 1 ? 'bg-rose-100 text-black' : 
                            idx == 2 ? 'bg-orange-100 text-black' : ''
                        }`}
                        key={`${idx}_${item.head}`}
                    >

                        <div
                            aria-hidden="true"
                            className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                        ></div>
                        <div className='flex flex-col p-4 w-[100%] gap-[2rem]'>
                            <img src={item.img} width={"20%"} />
                            <div className='flex flex-col gap-[1rem]'>
                                <h2 className='font-bold'>{item.head}</h2>
                                <p className={`${idx == 0 ? 'text-white' : 'text-gray-700'} font-semibold`}>{item.text}</p>
                            </div>
                        </div>
                        {/* <span className="relative z-20 text-sm text-white leading-[1.6] font-normal text-white font-bold">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] font-normal text-white font-bold ">
                                        {item.name}
                                    </span>
                                    <span className="text-sm leading-[1.6] font-normal ttext-white font-bold ">
                                        {item.title}
                                    </span>
                                </span>
                            </div> */}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Intro;

// import React, { useEffect, useRef, useState } from "react";
// import cn from "classnames"; // assuming you're using classnames library

// const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }) => {
//   const containerRef = useRef(null);
//   const scrollerRef = useRef(null);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     if (!scrollerRef.current) return;

//     const scroller = scrollerRef.current;
//     const hasDuplicated = scroller.getAttribute("data-duplicated");

//     if (!hasDuplicated) {
//       const itemsToDuplicate = Array.from(scroller.children);
//       itemsToDuplicate.forEach((item) => {
//         const clone = item.cloneNode(true);
//         scroller.appendChild(clone);
//       });
//       scroller.setAttribute("data-duplicated", "true");
//     }

//     applyStyles();
//     setStart(true);

//     return () => {
//       // Optional: cleanup duplicated nodes if needed
//     };
//   }, []);

//   const applyStyles = () => {
//     if (!containerRef.current) return;

//     containerRef.current.style.setProperty(
//       "--animation-direction",
//       direction === "left" ? "forwards" : "reverse"
//     );

//     let duration = "40s";
//     if (speed === "fast") duration = "20s";
//     else if (speed === "slow") duration = "80s";

//     containerRef.current.style.setProperty("--animation-duration", duration);
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20 max-w-7xl overflow-hidden will-change-transform",
//         "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
//           start && "animate-scroll",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             key={`${idx}_${item.head}`}
//             className={cn(
//               "relative min-w-[320px] min-h-[250px] shrink-0 rounded-2xl border border-b-0 px-8 py-6 md:w-[200px]",
//               "will-change-transform",
//               idx === 0 && "bg-indigo-500 text-white border-zinc-200 dark:border-zinc-700",
//               idx === 1 && "bg-rose-100 text-black border-zinc-200 dark:border-zinc-700",
//               idx === 2 && "bg-orange-100 text-black border-zinc-200 dark:border-zinc-700"
//             )}
//           >
//             <div
//               aria-hidden="true"
//               className="pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
//             />
//             <div className="flex flex-col p-4 w-full gap-8">
//               <img src={item.img} alt="" width="20%" />
//               <div className="flex flex-col gap-4">
//                 <h2 className="font-bold">{item.head}</h2>
//                 <p className={cn("font-semibold", idx === 0 ? "text-white" : "text-gray-700")}>
//                   {item.text}
//                 </p>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };



