import linkedIn from "../assets/linkedin-app-white-icon.png";
import whatsapp from "../assets/whatsapp-white-icon.png";
import behance from "../assets/behance-512.png";
import instagram from "../assets/instagram-white-icon.png";
import youtube from "../assets/youtube-app-white-icon.webp";
import logo from "../assets/logo-2.png";

const Footer = () => {
  return (
    <div className="m-auto flex h-[330px] w-full flex-col items-center gap-5 bg-[#121212] py-4 text-center text-2xl">
      <div>
        <img className="w-[70px] md:w-[100px]" src={logo} alt="" />
      </div>
      <div className="mt-6">
        <ul className="flex gap-3">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/seif-ofa-5b07a7166/"
            >
              <img
                className="w-[35px] transition-all hover:scale-[1.1] md:w-[60px]"
                src={linkedIn}
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/201280517846">
              <img
                className="w-[35px] transition-all hover:scale-[1.1] md:w-[60px]"
                src={whatsapp}
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.behance.net/saifofapsd1">
              <img
                className="w-[35px] transition-all hover:scale-[1.1] md:w-[60px]"
                src={behance}
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/ofapsd/">
              <img
                className="w-[35px] transition-all hover:scale-[1.1] md:w-[60px]"
                src={instagram}
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/@ofapsd">
              <img
                className="w-[35px] transition-all hover:scale-[1.1] md:w-[60px]"
                src={youtube}
              />
            </a>
          </li>
        </ul>
      </div>
      <footer className="mt-7 flex w-full flex-col items-center justify-center gap-3 px-2 text-xl md:flex-row md:justify-between md:px-10">
        <ul className="flex gap-2 text-[14px] md:gap-5 md:text-[17px]">
          <li>
            <a className="hover:text-[#00f2f2cf]" href="#up">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#00f2f2cf]" href="#projs">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-[#00f2f2cf]" href="#projs">
              Portfolio
            </a>
          </li>
          <li>
            <a className="hover:text-[#00f2f2cf]" href="#projs">
              About
            </a>
          </li>
        </ul>

        <p className="text-[15px] md:text-[19px]">
          Coded By {""}
          <a
            href="https://www.linkedin.com/in/ahmed-mo-soliman/"
            className="text-[#00f2f2cf] hover:underline"
          >
            Ahmed Soliman
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
