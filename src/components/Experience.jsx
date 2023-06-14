import { OrbitControls ,Float} from "@react-three/drei";
import Background from "./Background";
import { Airplane } from "./Airplane";
import Clouds from "./Clouds";
import * as THREE from "three"
import { useState,useRef   } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export const Experience = () => {
  const airplane = useRef();
  const { camera } = useThree();

  useFrame(() => {
    camera.position.copy(airplane.current.position.clone().add(new THREE.Vector3(10, 10, 0)));
    camera.lookAt(airplane.current.position);
    });

  return (
    <>
      <Background />
      {/* <Float floatIntensity={2} speed={2}> */}
        <Airplane airplane={airplane} />
      {/* </Float> */}
      <group>
        {new Array(200).fill(0).map((_, ind) => {
          return <Clouds key={ind} />;
        })}
      </group>
    </>
  );
};
