
import React from "react";
import { ContainerScroll } from "./ContainerScrollAnimation";
import obj from "../data";

export function BrandScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Feel the melody with our   <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
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
