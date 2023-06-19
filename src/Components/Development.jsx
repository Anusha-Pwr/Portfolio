import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stage } from "@react-three/drei";
import Computer from "./Computer";
import styled from "styled-components";

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    right: 100px;

    @media (max-width: 768px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`

function Development() {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Computer />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>
                We design products with a strong focus on both world class design and ensuring your product is a market success.
            </Desc>
        </>
    );
}

export default Development;