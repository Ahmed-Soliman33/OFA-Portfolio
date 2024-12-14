import { useState } from "react";
import Card_3D from "../Components/Card_3d";

const Services = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mt-[250px] px-24 pt-14 lg:m-0"
    >
      <div className="mb-2 flex flex-col items-center text-center">
        <h1 className="font-teko text-[60px]">Services</h1>
        <p
          className={`mt-[-17px] h-[3px] transition-all ${hovered ? "w-32" : "w-24"} rounded-sm bg-secondary`}
        ></p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-10">
        <Card_3D
          color_1="gradiant_color_1"
          color_2="secondary"
          title="Photo Manipulation"
          icon={
            "https://lottie.host/dbf4cb29-198e-4a14-b20b-a29bf979a7a8/0AOLSfSVL9.lottie"
          }
        />
        <Card_3D
          color_1="secondary"
          color_2="gradiant_color_2"
          title="Print Media"
          icon={
            "https://lottie.host/7d90fd56-a0f4-436f-9bf6-1e5ed6eb638a/vVPNvTrBxg.lottie"
          }
        />
        <Card_3D
          color_1="gradiant_color_1"
          color_2="blue_color"
          title="Social Media Designs"
          icon={
            "https://lottie.host/3bc66aca-fdbf-48de-8632-2e8b11704947/Qgi8ISCcnz.lottie"
          }
        />
        <Card_3D
          color_1="red_color"
          color_2="gradiant_color_1"
          title="YouTube Thumbnails"
          icon={
            "https://lottie.host/926014b4-d367-40d6-9e25-8dd4f1eee173/9qMU12b60p.lottie"
          }
        />
        <Card_3D
          color_1="gradiant_color_1"
          color_2="green_color"
          title="Video Editing"
          icon={
            "https://lottie.host/7ac4d7a6-788e-4446-b235-ff7ec4fb64f7/AVVFyQmBtM.lottie"
          }
        />
      </div>
    </div>
  );
};

export default Services;
