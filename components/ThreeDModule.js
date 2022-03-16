import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, RoundedBox } from "@react-three/drei";
import { PresentationControls } from "@react-three/drei";

function Box() {
  //   const [size, set] = useState(0.5);
  const [hidden, setVisible] = useState(false);
  return (
    <mesh style={{ touchAction: "none" }}>
      <boxGeometry style={{ touchAction: "none" }} args={[1.5, 1, 0.5]} />
      <meshStandardMaterial />
      <Html
        // style={{
        //   opacity: hidden ? 0 : 1,
        //   transform: `scale(${hidden ? 0.5 : 1})`,
        // }}
        distanceFactor={1.5}
        position={[0, 0, 0.27]}
        transform
        occlude
        onOcclude={setVisible}
      >
        <span>I look like 2d but I'm 3d</span>
      </Html>
    </mesh>
  );
}

const ThreeDModule = () => {
  return (
    <div className="absolute w-[40vw] h-[70vh] z-[0]">
      <Canvas style={{ touchAction: "none" }} dpr={[1, 2]} camera={{ fov: 25 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -10]} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 100 }}
          snap={{ mass: 4, tension: 500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Box />
        </PresentationControls>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default ThreeDModule;
