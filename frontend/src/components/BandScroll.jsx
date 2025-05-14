
import React from "react";
import { ContainerScroll } from "./ContainerScrollAnimation";
import obj from "../data";

export function BrandScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold" >
              Feel the melody with our   <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent" style={{ backgroundImage: "radial-gradient(98.0344% 98.0344% at 1.35135% 3.04878%, rgb(49, 46, 129) 0%, rgb(3, 7, 18) 100%)" }}>
                Music Band
              </span>
            </h1>
          </>
        }>
        <img
          src={obj.band}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false} />
      </ContainerScroll>
    </div>
  );
}
