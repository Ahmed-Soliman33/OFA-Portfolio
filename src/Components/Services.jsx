import { useState, memo } from "react";
import Card_3D from "../Components/Card_3d";

const Services = ({ serviceRef }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mt-[250px] px-24 pt-14 lg:m-0"
    >
      <div
        ref={serviceRef}
        className="mb-2 flex flex-col items-center text-center"
      >
        <h1 className="font-teko text-[60px]">Services</h1>
        <p
          className={`mt-[-17px] h-[3px] transition-all ${hovered ? "w-32" : "w-24"} rounded-sm bg-secondary`}
        ></p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-10">
        <MemoizedCard
          linkUrl={"/portfolio/manipulation"}
          color_1="secondary"
          color_2="gradiant_color_2"
          title="Photo Manipulation"
          icon={
            "https://lottie.host/dbf4cb29-198e-4a14-b20b-a29bf979a7a8/0AOLSfSVL9.lottie"
          }
        />
        <MemoizedCard
          linkUrl={"portfolio/print"}
          color_1="secondary"
          color_2="gradiant_color_2"
          title="Print Media"
          icon={
            "https://lottie.host/7d90fd56-a0f4-436f-9bf6-1e5ed6eb638a/vVPNvTrBxg.lottie"
          }
        />
        <MemoizedCard
          linkUrl={"portfolio/social"}
          color_1="secondary"
          color_2="gradiant_color_2"
          title="Social Media Designs"
          icon={
            "https://lottie.host/3bc66aca-fdbf-48de-8632-2e8b11704947/Qgi8ISCcnz.lottie"
          }
        />
        <MemoizedCard
          linkUrl={"portfolio/youtube"}
          color_1="secondary"
          color_2="gradiant_color_2"
          title="YouTube Thumbnails"
          icon={
            "https://lottie.host/926014b4-d367-40d6-9e25-8dd4f1eee173/9qMU12b60p.lottie"
          }
        />
        <MemoizedCard
          linkUrl={"portfolio/video"}
          color_1="secondary"
          color_2="gradiant_color_2"
          title="Video Editing"
          icon={
            "https://lottie.host/7ac4d7a6-788e-4446-b235-ff7ec4fb64f7/AVVFyQmBtM.lottie"
          }
        />
      </div>
    </div>
  );
};

// Wrap Card_3D component with React.memo to avoid unnecessary re-renders
const MemoizedCard = memo(Card_3D);

export default Services;
