import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import obj from "../data";

const images = [
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020",
    "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-sBcMfX51msbqJeBZnzZ0PYqsCWdUrF1zLhNv8hvJKXIUpAU9CJQSKpCHRBV68qz5XpA4t9uZpjzzHxpJJfgpzlw4YM76JCZKjhk9mgb4gVYjlNOSou5Z1bA0U-hQDmB3swg8J=s1360-w1360-h1020",
];

export default function CardStack() {
    //     const containerRef = useRef(null);
    //   const { scrollYProgress } = useScroll({
    //     target: containerRef,
    //     offset: ["start start", "end end"],
    //   });

    //   return (
    //     <div
    //       ref={containerRef}
    //       className="relative h-[500vh] bg-black flex items-start justify-center"
    //     >
    //       <div className="sticky top-24 w-[320px] h-[440px]">
    //         {/* Reverse the array so newest images render last and appear on top */}
    //         {images.map((src, index) => {
    //           const total = images.length;
    //           const reversedIndex = total - 1 - index; // Flip index
    //           const start = reversedIndex / total;
    //           const end = (reversedIndex + 1) / total;

    //           // Scroll-based transforms
    //           const scale = useTransform(scrollYProgress, [start, end], [1, 0.85]);
    //           const y = useTransform(scrollYProgress, [start, end], [0, -50 * (reversedIndex/2) ]);
    //           const x = useTransform(scrollYProgress, [start, end], [500, 0]); // Slide in from right

    //           const zIndex = reversedIndex - 1; // Newer images go on top

    //           return (
    //             <motion.div
    //               key={index}
    //               style={{ scale, y, x, zIndex }}
    //               className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-2xl"
    //             >
    //               <motion.img
    //                 src={src}
    //                 alt={`Card ${index}`}
    //                 className="w-full h-full object-cover rounded-xl border border-white/10"
    //               />
    //             </motion.div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   );

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div
            ref={containerRef}
            className="relative h-[500vh] flex items-start justify-center"
        >
            <div className="sticky top-24 w-[400px] h-[260px]">
                {/* {images.map((src, index) => {
                    const total = images.length;
                    const reversedIndex = total - 1 - index;
                    const start = reversedIndex / total;
                    const end = (reversedIndex + 1) / total;

                    const scale = useTransform(scrollYProgress, [start, end], [1, 0.85]);
                    const y = useTransform(scrollYProgress, [start, end], [0, 50 * (reversedIndex /2)]);
                    const x = useTransform(scrollYProgress, [start, end], [500, 0]);

                    // Fade in only when we reach this image's scroll range
                    const visibleStart = start - 0.01; // slight buffer
                    const opacity = useTransform(scrollYProgress, [0, visibleStart, start], [0, 0, 1]);
                    const visibleEnd = end + 0.05;
                    const opacity_new = useTransform(
                        scrollYProgress,
                        [0, visibleStart, start, end, visibleEnd, 1],
                        [0, 0, 1, 1, 0, 0]
                      );

                    return (
                        <motion.div
                            key={reversedIndex}
                            style={{ scale, y, x, opacity ,zIndex: reversedIndex , pointerEvents: 'none' }}
                            className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-2xl flex items-start p-2"
                        >
                            <div className="w-full">
                                <img src={obj.garvit} className="rounded-full w-[70px] h-[70px]"/>
                            </div>

                            <div className="flex flex-col" style={{opacity_new }}>
                                <h3 className="text-xl font-bold">Listener</h3>
                                <p className="text-gray-300">from Mumbai</p>
                                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem praesentium mollitia odit impedit consequuntur. Maiores, 
                                    landitiis maxime excepturi harum voluptates a aut tenetur.</p>
                            </div>
                        </motion.div>
                    );
                })} */}

                {images.map((src, index) => {
                    const total = images.length;
                    const reversedIndex = total - 1 - index;
                    const start = reversedIndex / total;
                    const end = (reversedIndex + 1) / total;

                    const scale = useTransform(scrollYProgress, [start, end], [1, 0.85]);
                    const y = useTransform(scrollYProgress, [start, end], [0, 50 * (reversedIndex / 2)]);
                    const x = useTransform(scrollYProgress, [start, end], [500, 0]);

                    // Inner content opacity
                    const fadeOutStart = end + 0.05; // start fading out after stack
                    const fadeOutEnd = end + 0.2;
                    const contentOpacity = useTransform(scrollYProgress, [fadeOutStart, fadeOutEnd], [1, 0]);

                    return (
                        <motion.div
                            key={reversedIndex}
                            style={{
                                scale,
                                y,
                                x,
                                zIndex: reversedIndex,
                                pointerEvents: 'none',
                            }}
                            className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 backdrop-blur-sm flex items-start p-4"
                        >
                            <motion.div
                                style={{ opacity: contentOpacity }}
                                className="flex gap-4"
                            >
                                <img
                                    src={obj.garvit}
                                    alt="avatar"
                                    className="rounded-full w-[70px] h-[70px] object-cover"
                                />
                                <div className="flex flex-col gap-1 text-white">
                                    <h3 className="text-lg font-semibold">Listener</h3>
                                    <p className="text-sm text-gray-400">from Mumbai</p>
                                    <p className="text-sm text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                                        praesentium mollitia odit impedit consequuntur. Maiores, landitiis.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );

}