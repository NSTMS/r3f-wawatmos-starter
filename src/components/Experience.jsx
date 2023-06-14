import { OrbitControls ,Float} from "@react-three/drei";
import Background from "./Background";
import { Airplane } from "./Airplane";
import Clouds from "./Clouds";
import * as THREE from "three"
import { useState,useRef ,useEffect  } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export const Experience = () => {
  const airplane = useRef();
  const { camera } = useThree();

  useFrame(() => {
    // camera.position.copy(airplane.current.position.clone());
    camera.position.copy([0,0,0])
    camera.lookAt(airplane.current.position);
  });
  useEffect(()=>{
    camera.position.copy([-10,2,0])
  },[])

  return (
    <>
      <Background />
      <Float floatIntensity={2} speed={2}>
        <Airplane airplane={airplane} />
      </Float>
      {/* <group>
        {new Array(50).fill(0).map((_, ind) => {
          return <Clouds key={ind} />;
        })}
      </group> */}
    </>
  );
};
