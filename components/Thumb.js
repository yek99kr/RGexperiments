import React, { useRef, Suspense } from "react";
import Hand from "../public/Hand.js";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";

const Thumb = () => {
  //   const ref = useRef();
  //   const { nodes, materials } = useGLTF("/hand.glb");
  return (
    <div
      style={{
        position: "relative",
        width: "60vw",
        height: "60vh",
        left: "-10vw",
        top: "-5vh",
      }}
    >
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 400 }}>
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.3}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Hand scale={0.2} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          // minPolarAngle={Math.PI / 2}
          // maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          // enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default Thumb;
