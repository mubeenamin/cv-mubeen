"use client";
import Image from "next/image";
import { Circle, Line } from "rc-progress";
import { useState } from "react";
type prop = {
  title: string;
  hard: {
    icon: string;
    text: string;
    percents: number;
  }[];
};

export default function SkillsDetails({ data }: { data: prop }) {
  const [activeCard, setActiveCard] = useState(null);
  const { title, hard } = data;
  const handleClick = (index:any) => {
    setActiveCard(index === activeCard ? null : index);
  };
  return (
    <section className=" bg-slate-800 relative p-4 sm:p-8 lg:p-20 rounded-lg mb-10">
      <h1 className="mb-8">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        { hard.map((link, index)=>(
        <div
        key={link.icon}
          className={`card ${index===activeCard ? "is-flipped" : ""}`}
          onClick={()=>handleClick(index)}
        >
          <div className="front flex justify-center items-center shadow-xl cursor-pointer">
            <Image src={link.icon} height={150} width={150} alt="icons" />
          </div>
          <div className="back flex flex-col justify-center items-center shadow-xl cursor-pointer px-2">
           <h2 className="pb-2"> {link.percents}% </h2>
            <Line percent={link.percents} strokeWidth={4} trailWidth={4} transition="80"/>
          </div>
        </div>
       ))}
      </div>
    </section>
  );
}
