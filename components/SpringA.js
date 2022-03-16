import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";

const LogoSpring = () => {
  return (
    <>
      <div className="relative">
        <img
          style={{ transform: "none" }}
          className="absolute ml-10 w-[60vw]"
          src="/logo.png"
        ></img>
      </div>
    </>
  );
};

export default LogoSpring;
