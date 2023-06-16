import React, { useEffect } from 'react'
import { Cloud } from './Cloud'
export default function Clouds() {
    const r = (max) => {return Math.random()*max - max/2}
  return (
        <Cloud speed={0.2} opacity={0.5} position={[r(1000), r(300),r(1000)]} rotation={[0,-Math.PI/2,0]}/>
    )
}
