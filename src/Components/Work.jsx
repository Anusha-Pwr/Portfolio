import React, { useState } from "react";
import styled from "styled-components";
import ProductDesign from "./ProductDesign";
import ReactModel from "./ReactModel";
import Development from "./Development";
import Bootstrap from "./Bootstrap";
import Skill1 from "./Skill1";
import Skill2 from "./Skill2";
import StylePlanet from "./StylePlanet";

const data = [
    "React",
    "Development",
    "Bootstrap",
    "HTML",
    "CSS"
];

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    position: relative;
    color: black;
    font-size: 14px;
    font-weight: 300;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center; 

    @media (max-width: 768px) {
        padding: 20px;
        justify-content: center;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center
    gap: 20px;
`

const ListItem = styled.li`
    font-size: 90px;
    font-weight: bold;
    cursor: pointer;
    -webkit-text-stroke: 1px white;
    color: transparent;
    position: relative;

    ::after {
        content: "${(props) => props.text}";
        position: absolute;
        left: 0;
        top: 0;
        color: pink;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover {
        ::after {
            animation: moveText 0.5s linear both;
        }

        @keyframes moveText {
            to{
                width: 100%;
            }
        }
    }

    @media (max-width: 768px) {
        font-size: 24px;
        color: white;
        -webkit-text-stroke: 0px;  
    }
`

const Right = styled.div`
    flex: 1;
`



function Work() {
    const [work, setWork] = useState("Web Design")

    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {
                            data.map((item, index) => {
                               return <ListItem key={index} text={item} onClick={() => setWork(item)}>{item}</ListItem>
                            })
                        }
                    </List>
                </Left>
                <Right>
                        {
                            work === "React" ? (<ReactModel />) : work === "Development" ? (<Development />) : work === "Bootstrap" ? (<Bootstrap />) :
                            work === "HTML" ? (<Skill1 />) : work === "CSS" ? (<Skill2 />) : <StylePlanet />
                        }
                </Right>
            </Container>
        </Section>
    );
}

export default Work;