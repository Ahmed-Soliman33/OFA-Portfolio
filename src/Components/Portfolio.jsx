import { useState, useMemo } from "react";
import mani_imgs from "../data/manipulation";
import print_imgs from "../data/print";
import social_imgs from "../data/social";
import youtube_imgs from "../data/youtube";
import Carousel from "./Carousel";

const Portfolio = ({ portfolioRef }) => {
  const [hovered, setHovered] = useState(false);

  // استخدم useMemo لتحسين العمليات الحسابية (إذا كان هناك حاجة)
  const carouselData = useMemo(
    () => ({
      mani_imgs,
      print_imgs,
      social_imgs,
      youtube_imgs,
    }),
    [],
  );

  const renderCarouselSectionRight = (title, description, images) => (
    <div className="m-auto mt-10 flex w-[90%] flex-col items-center gap-3 overflow-hidden md:flex-row">
      <div>
        <Carousel data={images} />
      </div>
      <div className="flex w-[700px] flex-col gap-2">
        <h1 className="font-oswald text-[30px] md:text-[50px]">{title}</h1>
        <p className="text-[13px] opacity-65 md:text-[18px]">{description}</p>
      </div>
    </div>
  );
  const renderCarouselSectionLeft = (title, description, images) => (
    <div className="m-auto mt-10 flex w-[90%] flex-col items-center gap-3 overflow-hidden md:flex-row">
      <div className="flex w-[700px] flex-col gap-2">
        <h1 className="font-oswald text-[30px] md:text-[50px]">{title}</h1>
        <p className="text-[13px] opacity-65 md:text-[18px]">{description}</p>
      </div>
      <div>
        <Carousel data={images} />
      </div>
    </div>
  );

  return (
    <div
      ref={portfolioRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mt-6 flex flex-col text-center md:gap-2 md:text-start"
    >
      <h1 className="text-center font-teko text-[70px]">Portfolio</h1>
      <p
        className={`m-auto mt-[-25px] h-[3px] transition-all ${hovered ? "w-32" : "w-24"} rounded-sm bg-secondary`}
      ></p>

      {/* Photo Manipulation Section */}
      {renderCarouselSectionRight(
        "Photo Manipulation",
        "Transforming ordinary images into stunning visuals with advanced editing techniques to bring creative concepts to life.",
        carouselData.mani_imgs,
      )}

      {/* Print Media Section */}
      {renderCarouselSectionLeft(
        "Print Media",
        "Designing professional print materials such as brochures, business cards, posters, and packaging to create a lasting impact.",
        carouselData.print_imgs,
      )}

      {/* Social Media Designs Section */}
      {renderCarouselSectionRight(
        "Social Media Designs",
        "Creating visually captivating designs tailored for social media platforms, helping brands stand out and engage with their audience effectively.",
        carouselData.social_imgs,
      )}

      {/* YouTube Thumbnails Section */}
      {renderCarouselSectionLeft(
        "YouTube Thumbnails",
        "Designing eye-catching and creative thumbnails that drive clicks and highlight the essence of your YouTube videos.",
        carouselData.youtube_imgs,
      )}
    </div>
  );
};

export default Portfolio;
