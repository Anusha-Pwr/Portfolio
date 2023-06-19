/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 sketchFab.gltf --transform
Author: palletorsson (https://sketchfab.com/palletorsson)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sketchfab-website-f24c93ba3c364f60bdd2b78a2aeba344
Title: Sketchfab website
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Portfolio/sketchFab-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Default-Material']} scale={[10, 1, 10]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.allsides} position={[0, 2.31, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={[4.85, 3, 0.2]} />
    </group>
  )
}

useGLTF.preload('/sketchFab-transformed.glb')
