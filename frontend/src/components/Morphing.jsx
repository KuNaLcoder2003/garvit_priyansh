import { MorphingText } from "./MorphingTexts";

const texts = [
  "Garvit",
  "Priyansh",
  "are",
  "the",
  "current",
  "trending",
  "in",
  "Indian Music",
  
];

export function Morphing() {
  return <MorphingText className={'min-h-[400px] border-2 border-black flex items-center justify-center'} texts={texts} />;
}
