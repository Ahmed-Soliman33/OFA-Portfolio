import { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({
  linkUrl = "/",
  title = "",
  c1 = "from-secondary",
  c2 = "to-gradiant_color-1",
  icon,
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={`relative h-96 w-72 rounded-xl bg-gradient-to-br from-gradiant_color-1 to-secondary`}
    >
      <Link
        to={linkUrl}
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="bg-white absolute inset-4 grid place-content-center rounded-xl text-center shadow-lg"
      >
        <DotLottieReact src={icon} loop style={{ width: "350px" }} autoplay />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          {title}
        </p>
      </Link>
    </motion.div>
  );
};

const Card_3D = ({ linkUrl, title, color_1, color_2, icon }) => {
  return (
    <div className="grid place-content-center px-4 py-12 text-primary">
      <TiltCard
        linkUrl={linkUrl}
        title={title}
        c1={`from-${color_1}`}
        c2={`to-${color_2}`}
        icon={icon}
      />
    </div>
  );
};

export default Card_3D;
