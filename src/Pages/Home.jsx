import mainImage from "../assets/main.webp";

const Home = () => {
  return (
    <div className="relative">
      <div className="m-auto mt-[-50px] flex flex-col items-center justify-between px-4 py-14 text-primary md:px-[155px] lg:flex-row">
        <div className="order-2 flex flex-col gap-5 md:w-[500px]">
          <h1 className="font-oswald text-[30px] leading-[1.1] tracking-tight md:text-[60px]">
            Bring your visions to life with stunning designs
            <span className="text-secondary">!</span>
          </h1>
          <p className="text-primary opacity-70 md:text-[18px]">
            I’m a graphic designer specializing in logo design, branding, social
            media designs, photo manipulation, and UI/UX. Take a look at my
            work, and let’s bring your ideas to life!
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img width={"700px"} src={mainImage} alt="main image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
