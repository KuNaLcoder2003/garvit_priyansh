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
        <div id='about' className='w-full 3xl:w-[60%] h-auto p-2'>

            <h2 className='text-3xl font-bold text-slate-600 relative top-8 w-[50%] 3xl:text-center  left-[85px]'>Garvit - Priyansh are </h2>



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
                        className={`relative w-[200px] min-h-[250px] shrink-0 rounded-2xl px-8 py-6 md:w-[320px] dark:border-zinc-700 ${
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





