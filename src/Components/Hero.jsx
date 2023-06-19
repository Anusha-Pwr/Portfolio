import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        height: 200vh;
    }
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

   @media (max-width: 768px) {
    flex: 1;
    align-items: center;
   }
`

const Title = styled.h1`
    font-size: 74px;

    @media (max-width: 768px) {
        text-align: center;
        padding-top: 400px;
    }
`

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Line = styled.img`
    height: 5px;
`

const Subtitle = styled.h2`
    color: #da4ea2;
`

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;

    @media (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }
`

const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500px;
    border: none;
    border-radius: 5px;
    width: 100px;
    padding: 10px;
`

const Right = styled.div`
    flex: 3;
    position: relative;

    @media (max-width: 768px) {
    flex: 1;
    width: 100%;
   }
`

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s ease infinite alternate;

    @keyframes animate{
        to{
            transform: translateY(50px);
        }
    }

    @media (max-width: 768px) {
        width: 400px;
        height: 400px;
    }
`

function Hero() {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Hello, I am Anusha.</Title>
                    <WhatWeDo>
                        <Line src="./Portfolio/img/line.png" />
                        <Subtitle>What I do</Subtitle>
                    </WhatWeDo>
                    <Desc>I enjoy creating delightful, human-centered digital experiences.</Desc>
                    <Button>
                        Learn More
                    </Button>
                </Left>

                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2.7}>
                        <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2} />
                        </Sphere>
                    </Canvas>
                    <Img src="./Portfolio/img/moon.png" />
                </Right>
            </Container>
        </Section>
    );
}

export default Hero;