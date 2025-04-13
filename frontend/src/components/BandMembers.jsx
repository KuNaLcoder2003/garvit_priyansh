
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import obj from "../data";

import { GoogleGeminiEffect } from "./GoogleGeminiEffect";

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

export const BandMembers = ({
    autoplay = false
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };



    return (
        <>


            <GoogleGeminiEffect className={'w-[full] h-[400vh]'} />

            <div
                className="flex-1 mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
                <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
                    <div>
                        <div className="relative h-80 w-full text-white">
                            <AnimatePresence>
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.src}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: -100,
                                            rotate: randomRotateY(),
                                        }}
                                        animate={{
                                            opacity: isActive(index) ? 1 : 0.7,
                                            scale: isActive(index) ? 1 : 0.95,
                                            z: isActive(index) ? 0 : -100,
                                            rotate: isActive(index) ? 0 : randomRotateY(),
                                            zIndex: isActive(index)
                                                ? 40
                                                : testimonials.length + 2 - index,
                                            y: isActive(index) ? [0, -80, 0] : 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: 100,
                                            rotate: randomRotateY(),
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0 origin-bottom">
                                        <img
                                            src={testimonial.src}
                                            alt={testimonial.name}
                                            width={500}
                                            height={500}
                                            draggable={false}
                                            className="h-full w-full rounded-3xl object-cover object-center" />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between py-4">
                        <motion.div
                            key={active}
                            initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -20,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}>
                            <h3 className="text-2xl font-bold text-black dark:text-white">
                                {testimonials[active].name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-neutral-500">
                                {testimonials[active].designation}
                            </p>
                            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
                                {testimonials[active].quote.split(" ").map((word, index) => (
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
                                            duration: 0.2,
                                            ease: "easeInOut",
                                            delay: 0.02 * index,
                                        }}
                                        className="inline-block">
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                            </motion.p>
                        </motion.div>
                        <div className="flex gap-4 pt-12 md:pt-0">
                            <button
                                onClick={handlePrev}
                                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                                <ArrowLeft
                                    className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                                <ArrowRight
                                    className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
