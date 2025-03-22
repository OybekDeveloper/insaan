import Image from "next/image";
import React from "react";

export default function Hero({ image, title, description }) {
  return (
    <main className="relative min-h-[250px] md:h-[calc(100vh-80px)]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={`/assets/${image}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          priority
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      <section className="w-10/12 mx-auto relative h-full py-10">
        {/* Title & description */}
        <div className="w-2/3 md:w-1/2 relative z-10 h-full flex justify-center items-start flex-col gap-4 text-black">
          <h1 className="textBig3 max-sm:text-xl max-md:text-4xl font-bold text-primary">
            {title}
          </h1>
          <p className="textNormal4 max-md:text-md max-sm:text-sm text-primary">
            {description}
          </p>
        </div>
        {/* Card section */}
      </section>
      <div className="z-20 bg-white/80 absolute right-4 bottom-4 sm:bottom-10 rounded-md sm:right-10 p-3 md:p-6 text-primary flex text-center items-center flex-col gap-2">
        <h1 className="text-center textSmall3 w-[120px] md:w-[250px]">
          Свяжитесь с нами чтобы узнать подробнее
        </h1>
        <button className="px-5 cursor-pointer py-3 bg-primary text-white rounded-sm textSmall3 font-bold">
          Связаться
        </button>
      </div>
    </main>
  );
}
