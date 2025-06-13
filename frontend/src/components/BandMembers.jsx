
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import obj from "../data";

const teamMembers = [{
    name: "Garvit Soni",
    role: "Singer",
    bio: "Garvit Soni is a Udaipur-based music producer, composer, and singer known for blending soulful melodies with intricate production. With a Diploma in Indian Classical Music from Maharaja Sayajirao University, Baroda, his work reflects emotional depth and refined musicality. Garvit showcases his original compositions on YouTube, each infused with quiet intensity. Offstage, he finds joy in cricket, channeling creativity into all areas of life. His calm presence and artistic vision form the heart of the Garvit-Priyansh sound.",

    image: obj.garvit,
},
{
    name: "Priyansh Srivastava",
    role: "Singer",
    bio: "Priyansh Srivastava is an indie singer-songwriter and composer from Faridabad, Haryana, blending emotional storytelling with classical training. A Mechanical Engineering graduate, he holds a Junior Diploma, Senior Diploma, and Prabhakar in Indian classical vocals from Prayag Sangeet Samiti. His music explores themes of love, introspection, and spiritual depth. Beyond music, Priyansh enjoys football and cooking, often likening the art of songwriting to crafting a dish. With heartfelt vocals and a structured approach, he brings soul and discipline to the duo’s unique sound.",

    image: obj.priyansh,
},
{
    name: "Mithilesh Panchal",
    role: "Keyboardist",
    bio: "Mithilesh began his musical journey with the piano, which laid the groundwork for his evolution into music production, composition, and arrangement. Known for blending emotion with technical precision, he plays a key role in crafting the band’s rich, cohesive sound both on stage and in the studio. His versatility and creative instincts continue to push the band’s musical boundaries forward.",

    image: obj.mithilesh,
},
{
    name: "Aditya Kulkarni",
    role: "Guitarist",
    bio: "Aditya Kulkarni is a self-taught guitarist who also plays the keyboards. With a growing passion for music production, he primarily explores cinematic, Bollywood, and fusion styles. In his free time, he enjoys jamming, experimenting with new musical ideas, and discovering fresh sounds and plugins. For Aditya, music is a constant presence — whether he's listening, creating, or planning his next musical venture.",

    image: obj.aditya,
},
{
    name: "Nikhil Bachute",
    role: "Drumer",
    bio: "Nikhil Bachute is a dynamic drummer with over eight years of experience and four years in the professional music scene. Renowned for his versatility and rhythmic precision, he has toured globally and performed with top artists like Sukhwinder Singh, Shaan, Gajendra Verma, and Ash King. He’s been part of major acts including Vinod B Project, Euphony, Sayli Kamble, Rohit Raut, and Saif Ali Khan’s live ensemble. A multi-time band competition winner, Nikhil also explored acting, appearing in Season 2 of Bandish Bandits. With a strong groove and evolving style, he continues to make his mark in the Indian music industry.",

    image: obj.nikhil,
},
{
    name: 'Bhav Narang',
    role: 'Bassist',
    bio: 'Bhav Narang is a Delhi-based multi-genre musician with roots in jazz and blues. A Grade 8 certified pianist, bassist, and guitarist from Trinity and Rockschool London, he has mentored over 80 students in the past four years. Bhav has performed alongside artists like Diljit Dosanjh, Tony Kakkar, and Suresh Wadkar, and was part of a Guinness World Record-winning band that composed for Amazon Prime’s The Forgotten Army. In 2023, he gained national recognition on India’s Got Talent Season 10 with Bombay Shor, honoring the legendary KK.',
    image: obj.bhav

}
]

export const BandMembers = ({
    autoplay = false
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % teamMembers.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
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




            <div
                className="flex-1 mt-[-50px] mx-auto max-w-sm px-4 py-20 flex flex-col gap-8 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12">

                <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2">
                    <div>
                        <div className="relative h-80 w-full text-white">
                            <AnimatePresence>
                                {teamMembers.map((member, index) => (
                                    <motion.div
                                        key={member.image}
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
                                                : teamMembers.length + 2 - index,
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
                                            src={member.image}
                                            alt={member.name}
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
                            <h3 className="text-2xl font-bold text-black ">
                                {teamMembers[active].name}
                            </h3>
                            <p className="text-sm text-gray-500 ">
                                {teamMembers[active].role}
                            </p>
                            <motion.p className="mt-8 text-lg text-gray-500 ">
                                {teamMembers[active].bio.split(" ").map((word, index) => (
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
                                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 ">
                                <ArrowLeft
                                    className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 " />
                            </button>
                            <button
                                onClick={handleNext}
                                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 ">
                                <ArrowRight
                                    className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 " />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
