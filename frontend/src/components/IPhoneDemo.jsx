import obj from "../data";
import { Iphone15Pro } from "./IPhone";
 
export function Iphone15ProDemo() {
  
  return (
    <div className="relative mt-20">
        <h1 className="font-bold text-2xl lg:text-3xl text-center">A message from us</h1>
      <Iphone15Pro
        className="size-full md:size-[30%] md:m-auto lg:size-[22%] p-4"
        videoSrc={obj.video}
      />
    </div>
  );
}