import React, { useRef, useContext, useEffect, useState, createContext } from 'react'
import obj from '../data'
import { motion } from 'framer-motion'
import { cn } from '../utils'

const Releases = () => {
    return (
        <div className='flex flex-col justify-center '>
            <h2 className='text-3xl font-bold text-slate-600 relative top-8 w-[50%] left-[85px]'>Our Releases </h2>
            <div className='flex w-full items-center gap-[10px] justify-center overflow-hidden flex-wrap'>

                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Sanware
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Song 1
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
                            Tu Azma
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Song 2
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
                            Kagaz
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Song 3
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


            </div>
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

export default Releases
