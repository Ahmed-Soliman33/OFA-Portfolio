import { useState } from "react";
import mani_imgs from "../data/manipulation";
import print_imgs from "../data/print";
import social_imgs from "../data/social";
import youtube_imgs from "../data/youtube";
import Carousel from "./Carousel";

const Portfolio = ({ portfolioRef }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={portfolioRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mt-6 flex flex-col text-center md:gap-2 md:text-start"
    >
      <h1 className="font-teko text-center text-[70px]">Portfolio</h1>
      <p
        className={`m-auto mt-[-25px] h-[3px] transition-all ${hovered ? "w-32" : "w-24"} rounded-sm bg-secondary`}
      ></p>
      <div className="m-auto flex w-[90%] flex-col items-center gap-3 overflow-hidden md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <h1 className="font-oswald text-[30px] md:text-[50px]">
            Photo Manipulation
          </h1>
          <p className="text-[13px] opacity-65 md:text-[18px]">
            Transforming ordinary images into stunning visuals with advanced
            editing techniques to bring creative concepts to life.
          </p>
        </div>
        <Carousel data={mani_imgs} />
      </div>
      <div className="m-auto mt-10 flex w-[90%] flex-col items-center gap-3 overflow-hidden md:flex-row">
        <Carousel data={print_imgs} />
        <div className="flex flex-1 flex-col gap-2">
          <h1 className="font-oswald text-[30px] md:text-[50px]">
            Print Media
          </h1>
          <p className="text-[13px] opacity-65 md:text-[18px]">
            Designing professional print materials such as brochures, business
            cards, posters, and packaging to create a lasting impact.
          </p>
        </div>
      </div>
      <div className="m-auto mt-10 flex w-[90%] flex-col items-center gap-3 overflow-hidden md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <h1 className="font-oswald text-[30px] md:text-[50px]">
            Social Media Designs
          </h1>
          <p className="text-[13px] opacity-65 md:text-[18px]">
            Creating visually captivating designs tailored for social media
            platforms, helping brands stand out and engage with their audience
            effectively.
          </p>
        </div>
        <Carousel data={social_imgs} />
      </div>
      <div className="m-auto mt-10 flex w-[90%] flex-col items-center gap-3 overflow-hidden md:flex-row">
        <Carousel data={youtube_imgs} />
        <div className="flex flex-1 flex-col gap-2">
          <h1 className="font-oswald text-[30px] md:text-[50px]">
            YouTube Thumbnails
          </h1>
          <p className="text-[13px] opacity-65 md:text-[18px]">
            Designing eye-catching and creative thumbnails that drive clicks and
            highlight the essence of your YouTube videos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
