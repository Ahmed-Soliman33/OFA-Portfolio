import after_effects from "../assets/after-effects.png";
import illustrator from "../assets/illustrator.png";
import lightroom from "../assets/photoshop-lightroom.png";
import photoshop from "../assets/photoshop (1).png";
import indesign from "../assets/indesign.png";
import premiere from "../assets/premiere-pro.png";
import saif_img from "../assets/main.png";

const About = ({ aboutRef }) => {
  return (
    <div className="m-auto mt-32 flex w-[80%] flex-col items-center gap-20 lg:flex-row">
      <div className="pb-20">
        <img className="flex-1" src={saif_img} alt="" />
      </div>
      <div className="max-w-[550px]">
        <h1 ref={aboutRef} className="font-oswald text-[20px] md:text-[35px]">
          Hi! I'm Saif OFA
        </h1>
        <p className="font-poppins my-2 text-[12px] font-light md:text-[16px]">
          Design has been my passion for as long as I can remember. Since
          childhood, I’ve been inspired by photography and creating designs,
          which motivated me to develop my skills through intensive training and
          learning from experts in the field. I am a professional graphic and
          UI/UX designer with extensive experience using Adobe Photoshop,
          Illustrator, InDesign, Lightroom, and CorelDRAW. I specialize in logo
          design, branding, social media designs, photo manipulation, print
          media, and crafting intuitive website interfaces.
        </p>
        <p className="font-poppins my-2 text-[12px] font-light md:text-[16px]">
          In addition to design, I’m skilled in video editing with DaVinci
          Resolve, Adobe Premiere Pro, and After Effects, enabling me to create
          captivating multimedia content. I’m also passionate about 3D design
          and am eager to learn and master it in the near future to expand my
          creative skill set. With every project, my goal is to combine
          creativity and professionalism to deliver impactful, high-quality
          designs.
        </p>
        <div className="my-3">
          <h4 className="py-2 font-oswald text-[35px]">Tools</h4>
          <ul className="flex flex-wrap gap-2 px-2 pb-2">
            <li className="w-[70px]">
              <img src={after_effects} alt="" />
            </li>
            <li className="w-[70px]">
              <img src={illustrator} alt="" />
            </li>
            <li className="w-[70px]">
              <img src={lightroom} alt="" />
            </li>
            <li className="w-[70px]">
              <img src={photoshop} alt="" />
            </li>
            <li className="w-[70px]">
              <img src={indesign} alt="" />
            </li>
            <li className="w-[70px]">
              <img src={premiere} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
