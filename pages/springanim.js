import SpringA from "../components/SpringA";
import Ad from "../components/Ad";
import ThreeDModule from "../components/ThreeDModule";
import SpringLetter from "../components/SpringLetter";
import { motion } from "framer-motion";

export default function springanim() {
  return (
    <>
      {/* <div className="fixed z-[-5]  w-[100%] h-[100%] bg-[#00FF00]"></div>
      <motion.div
        drag
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
        style={{ userSelect: "none" }}
        className="absolute z-[-1] w-[100%] h-[1400px] bg-white"
      ></motion.div> */}
      <Ad />
      <SpringLetter />
      {/* <SpringA /> */}
      <ThreeDModule />

      <motion.img
        src="/ad2.png"
        className="w-full h-auto fixed  bottom-0 left-0"
      ></motion.img>

      <motion.div
        drag
        dragMomentum={false}
        style={{ userSelect: "none" }}
        className="z-[3] absolute top-[400px] right-[-3100px] w-[3200px] h-[70px] bg-gray-200 hover:cursor-grab active:cursor-grabbing"
      >
        <p className="relative left-[3000px] top-[10px] text-[13px]">
          something
        </p>
      </motion.div>
    </>
  );
}
