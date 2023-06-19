import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stage } from "@react-three/drei";
import Planet from "./Planet";
import styled from "styled-components";

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 10px;
    right: 30px;

    @media (max-width: 768px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`

function StylePlanet() {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Planet />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>
                I design products with a strong focus on both world class design and ensuring your product is a market success.
            </Desc>
        </>
    );
}

export default StylePlanet;