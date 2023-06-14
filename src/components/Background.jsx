import { Environment,Sphere } from '@react-three/drei'
import {Gradient, LayerMaterial} from 'lamina'
import React from 'react'
import * as THREE from 'three'

function Background() {
  return (
    <>
    <Environment  preset='sunset'/>
    <Sphere scale={[100,100,100]}  rotationX={Math.PI / 2} rotationY={Math.PI /2}>
      <LayerMaterial lighting='physical' transmission={1} side={THREE.BackSide}>
        <Gradient colorA={'#357ca1'} colorB={'white'} axes={'y'} start={0} end={0.5}></Gradient>
      </LayerMaterial>
    </Sphere>
    </>
  )
}

export default Background