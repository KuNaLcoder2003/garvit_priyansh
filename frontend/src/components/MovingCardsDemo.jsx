

import React from "react";
import { InfiniteMovingCards } from "./MovingCards";

export function InfiniteMovingCardsDemo({ref}) {
  return (
    <div ref={ref}
      className="h-[40rem] w-[100%] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      <InfiniteMovingCards items={moreTestimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The platform helped us scale our operations seamlessly. Deployment times dropped by 40%, and analytics are now real-time. A game-changer for our dev workflow.",
    name: "Kunal Singh",
    title: "Software Developer",
  },
  {
    quote:
      "Their AI engine doesn't just analyze data, it understands it. We've seen a 3x improvement in model accuracy since switching.",
    name: "Rohan Rao",
    title: "AI Expert",
  },
  {
    quote:
      "The simplicity and clarity of the dashboard make it easy for my students to grasp complex data concepts quickly. Excellent tool for modern education.",
    name: "Aakash Pandey",
    title: "Educator",
  },
  {
    quote:
      "Using their SaaS CRM, we’ve doubled our lead conversion in under a quarter. The automation is flawless and customer support is top-notch.",
    name: "Anubhav Dube",
    title: "Businessman",
  },
  {
    quote:
      "Their no-code AI builder empowered our startup to prototype fast and ship faster. We saved weeks of dev effort!",
    name: "Prateek Gupta",
    title: "Founder",
  },
  {
    quote:
      "The integration was smooth and the team is incredibly responsive. We now use their API in every core service.",
    name: "Sanya Kapoor",
    title: "Full Stack Engineer",
  },
  {
    quote:
      "From churn prediction to user segmentation — their AI suite gave our marketing team a whole new edge.",
    name: "Vikram Chauhan",
    title: "Marketing Lead",
  },
  {
    quote:
      "As a solo founder, having access to enterprise-grade analytics with zero setup was a blessing. Highly recommended.",
    name: "Megha Jain",
    title: "Startup Founder",
  },
  {
    quote:
      "Their tools transformed our operations — AI ticket tagging alone cut response time by 65%.",
    name: "Ritesh Nair",
    title: "Customer Success Manager",
  },
];


const moreTestimonials = [
  {
    quote:
      "Switching to their SaaS platform streamlined our billing process entirely. It's intuitive, reliable, and saves us hours every week.",
    name: "Neha Verma",
    title: "Finance Manager",
  },
  {
    quote:
      "The AI-driven insights helped us personalize user experience across the board. Engagement metrics have improved drastically.",
    name: "Rajeev Sinha",
    title: "Product Manager",
  },
  {
    quote:
      "What impressed me most was the ease of integration. Their APIs are well-documented and developer-friendly.",
    name: "Divya Bansal",
    title: "Backend Engineer",
  },
  {
    quote:
      "We've cut down on manual support tickets thanks to their smart chatbot integration. It's fast, accurate, and customers love it.",
    name: "Sarthak Mehra",
    title: "Customer Experience Lead",
  },
  {
    quote:
      "Their AI tools brought predictive capabilities to our HR software — helping us identify attrition risks early on.",
    name: "Ananya Iyer",
    title: "HR Tech Consultant",
  },
  {
    quote:
      "I was amazed by how quickly we could launch our MVP using their drag-and-drop builder. It’s perfect for lean teams.",
    name: "Ravi Sharma",
    title: "Technical Co-founder",
  },
  {
    quote:
      "With their automation suite, we set up complex workflows without writing a single line of code. Super powerful and user-friendly!",
    name: "Sneha Kaur",
    title: "Operations Lead",
  },
  {
    quote:
      "Their sentiment analysis tool helped us refine our content strategy across multiple platforms. Very insightful!",
    name: "Manav Joshi",
    title: "Content Strategist",
  },
  {
    quote:
      "The scalability of their cloud-based platform gave us confidence to expand globally. Uptime and support are rock solid.",
    name: "Tanvi Kulkarni",
    title: "CTO",
  },
];
