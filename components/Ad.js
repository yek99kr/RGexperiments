import { useDrag } from "@use-gesture/react";
import { motion } from "framer-motion";

const Ad = ({ position }) => {
  return (
    <>
      <div>
        <img
          className="z-[-1] absolute w-[700px] h-[130px]  ml-7 mt-7"
          src="/adBack.jpg"
        ></img>

        <motion.img
          src="/ad.jpg"
          className="z-[1] border relative w-[700px] h-[130px] text-center ml-7 mt-7 font-serif "
          drag
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
          dragElastic={0.01}
          style={{ userSelect: "none", border: "1px black" }}
        ></motion.img>
      </div>

      <div>
        <img
          className="z-[-1] absolute w-[700px] h-[450px]  ml-7 mt-7"
          src="/wallBack.png"
        ></img>

        <motion.div
          drag
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
          dragElastic={0.01}
          style={{ userSelect: "none" }}
          className="relative rounded-md w-[700px] h-[450px] text-center bg-gray-100 ml-7 mt-7 top-[28px] font-serif text-[40px]"
        ></motion.div>
      </div>
    </>
  );
};

export default Ad;
