import React, { useEffect } from 'react'
import { Cloud } from '@react-three/drei'
export default function Clouds() {
    const r = () => {return Math.random()*100 - 50}
  return (
        <Cloud speed={0.2} opacity={0.5} position={[r(), r(),r()]}/>
    )
}
