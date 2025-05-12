import { Iphone15Pro } from "./IPhone";
 
export function Iphone15ProDemo() {
  return (
    <div className="relative mt-20">
        <h1 className="font-bold text-2xl lg:text-3xl text-center">A message from us</h1>
      <Iphone15Pro
        className="size-full md:size-[30%] md:m-auto lg:size-[20%]"
        videoSrc="https://videos.pexels.com/video-files/8946986/8946986-uhd_1440_2732_25fps.mp4"
      />
    </div>
  );
}