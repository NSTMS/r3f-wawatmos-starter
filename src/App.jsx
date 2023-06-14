import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <PerspectiveCamera makeDefault position={[10, 0, 10]} rotation={[0, -Math.PI / 2, 0]} />
        <Experience />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
