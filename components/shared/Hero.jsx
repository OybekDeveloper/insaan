import React from "react";

export default function Hero({ image, title, description, cardTitle }) {
  return (
    <main
      className={`relative h-[calc(100vh-80px)] bg-[url(/assets/${image})] bg-bottom bg-[auto_100vw]`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
      {/* Title & dessc */}
      <div className="w-1/2 relative z-10 h-full flex justify-center items-start px-24 flex-col gap-4 text-black">
        <h1 className="text-7xl font-bold text-primary">{title}</h1>
        <p className="text-xl text-primary">{description}</p>
      </div>
      {/* Card section */}
      <div className="bg-white/80 absolute bottom-16 rounded-md right-16 p-6 text-primary flex text-center items-center flex-col gap-2">
        <h1 className="text-center text-xl w-[250px]">Свяжитесь с нами чтобы узнать подробнее</h1>
        <button className="px-5 cursor-pointer py-3 bg-primary text-white rounded-sm text-xl font-bold">
        Связаться
        </button>
      </div>
    </main>
  );
}
