import { motion } from "framer-motion";
import { useRef } from "react";

const SpringLetter = () => {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      drag
      dragConstraints={{ left: -30, right: 30, bottom: 750 }}
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      dragElastic={0.01}
      style={{ userSelect: "none" }}
      className="absolute top-[-900px] right-[200px] w-[70px] h-[1000px] bg-gray-200 "
    >
      <p className="relative top-[200px] text-[13px] text-center">something</p>
    </motion.div>
  );
};

export default SpringLetter;
