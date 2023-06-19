import React from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { OrbitControls, PerspectiveCamera, RenderTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { Text } from "@react-three/drei";
import Cube from "./Cube";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`

function Test() {
    return (
        <Container>
            
        </Container>
    );
}

export default Test;