// import { cn } from "../utils";

// import React from "react";
// import { Clipboard , File , Signature , TableColumnsSplit } from "lucide-react";
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "motion/react";
// import obj from "../data";

// const BentoGrid = ({
//   className,
//   children
// }) => {
//   return (
//     <div
//       className={cn(
//         "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
//         className
//       )}>
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon
// }) => {
//   return (
//     <div
//       className={cn(
//         "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200  p-4 transition duration-200 hover:shadow-xl border-white/[0.2] bg-black shadow-none",
//         className
//       )}>
//       {header}
//       <div className="transition duration-200 group-hover/bento:translate-x-2">
//         {icon}
//         <div
//           className="mt-2 mb-2 font-sans font-bold text-neutral-600 text-neutral-200">
//           {title}
//         </div>
//         <div
//           className="font-sans text-xs font-normal text-neutral-600 text-neutral-300">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };



// export function BentoGridSecondDemo() {
//   return (
//     <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           className={item.className}
//           icon={item.icon} />
//       ))}
//     </BentoGrid>
//   );
// }
// const Skeleton = () => (
//     // bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]
//   <div
//   style={{backgroundImage : `url(${obj.gpImg})`}}
//     className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  border border-transparent border-white/[0.2] bg-center bg-cover">

//     </div>
// );
// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     className: "md:col-span-2",
//     icon: <Clipboard className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     className: "md:col-span-1",
//     icon: <File className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     className: "md:col-span-1",
//     icon: <Signature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     className: "md:col-span-2",
//     icon: <TableColumnsSplit className="h-4 w-4 text-neutral-500" />,
//   },
// ];
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { encode } from "qss";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { cn } from "../utils";

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = ""
}) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = React.useState(false);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <div className="hidden">
          <img
            src={src}
            width={width}
            height={height}
            quality={quality}
            layout={layout}
            priority={true}
            alt="hidden image" />
        </div>
      ) : null}
      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}>
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-black dark:text-white", className)}
          href={url}>
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}>
                <a
                  href={url}
                  className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                  style={{ fontSize: 0 }}>
                  <img
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    quality={quality}
                    layout={layout}
                    priority={true}
                    className="rounded-lg"
                    alt="preview image" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};



export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://www.instagram.com/garvitsoni_/" className="font-bold">
          Garvit
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://www.instagram.com/priyanshhhsrivastava/" className="font-bold">
          Priyansh
        </LinkPreview>{" "}
        are always ready with music and beats.
      </p>
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://www.instagram.com/garvitxpriyansh/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
          Garvit - Priyansh
        </LinkPreview>{" "}
        for melodious, soulful and amazing music .
      </p>
    </div>
  );
}



const Services = ()=>{
    return(
        <LinkPreviewDemo/>
    )
}



export default Services







