

import React from "react";
import { InfiniteMovingCards } from "./MovingCards";

export function InfiniteMovingCardsDemo({ref}) {
  return (
    <div ref={ref}
      className="h-[40rem] w-[100%] rounded-md flex flex-col antialiased bg-transparent   items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Garvit and Priyansh bring a refreshing blend of simplicity and emotional depth to their music, creating songs that feel effortlessly real.",
    name: "Radio Music",
   
  },
  {
    quote:
      "Their music is a reflection of the resilience and optimism we all need in life, aiming to create something that truly connects with people.",
    name: "Rolling Stone India",
   
  },
  {
    quote:
      "Garvit Soni and Priyansh Srivastava deliver a captivating performance in 'Uska Pata,' showcasing their incredible vocal talents and soulful compositions.",
    name: "Times Of India",
    
  },
  {
    quote:
      "With 'Lafz' the duo showcases their versatility, pushing boundaries and redefining contemporary Indian music through innovative compositions",
    name: "News18",
   
  },
  {
    quote:
      "Garvit and Priyansh's Lafz is a captivating fusion of Indian classical music with contemporary tunes, showcasing their ability to evoke emotions through heartfelt lyrics and soul-stirring compositions.",
    name: "Indulge Express",
   
  },
  {
    quote:
      "Their collaboration on 'Sanware' showcases a perfect blend of guitar, flute, and magnificent alaaps, reflecting their dedication to creating music that resonates with the soul.",
    name: "The Talented Indian",
    
  },
  {
    quote:
      "Garvit Soni and Priyansh Srivastava deliver a captivating performance in 'Jiya Mera,' showcasing their exceptional vocal talents and mesmerizing music composition.",
    name: "Times Of India",
    
  },
  
];



