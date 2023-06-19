/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 Earth.gltf --transform
Author: ABOD.ANIMATION (https://sketchfab.com/body3d2005)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-c2e4294c32ea4d8b850e152fc26aeeb4
Title: earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Earth-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, -0.26]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/Earth-transformed.glb')
