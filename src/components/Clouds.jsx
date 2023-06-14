import React, { useEffect } from 'react'
import { Cloud } from './Cloud'
export default function Clouds() {
    const r = () => {return Math.random()*400 - 200}
  return (
        <Cloud speed={0.2} opacity={0.5} position={[r(), r(),r()]} rotation={[0,-Math.PI/2,0]}/>
    )
}
