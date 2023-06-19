import React from "react";
import styled from "styled-components";
import Icon1 from "../assets/crypto-img.png";
import Icon2 from "../assets/notes-img.png";
import Icon3 from "../assets/pizza-img.png";
// import {portfolio1} from "../img/portfolio1.jpg";
// import {portfolio2} from "/../img/portfolio2.jpg";
// import {portfolio3} from "/../img/portfolio3.jpg";
// import {portfolio4} from "/../img/portfolio4.jpg"
// import {portfolio5} from "/../img/portfolio5.jpg"
// import {portfolio6} from "/../img/portfolio6.jpg"\

const PortfolioContainer = styled.div`
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`

const PortfolioItem = styled.div`
    background: #FEC5E5;
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;

    &:hover {
        background: transparent;
        border-color: #da4ea2;
    }
`

const PortfolioImg = styled.img`
    width: 400px;
    height: 300px;
    border-radius: 1.5rem;
    overflow: hidden;
`

const Title = styled.div`
    margin: 1.2rem 0 2 rem;
`

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`


const ProjectsH1 = styled.h1`
    font-size: 74px;
    text-align: center;
    color: "white";
    ${'' /* margin-bottom: 64px; */}

    @media (max-width: 480px) {
        font-size: 64px;
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
    cursor: pointer;
`

function Projects() {
    return (
        <Section>
            <Container>
                <ProjectsH1>My Recent Work</ProjectsH1>
                <PortfolioContainer>
                    <PortfolioItem>
                        <PortfolioImg src={Icon1} />
                        <h3>Cryptocurrency tracking app</h3>
                        <a href="https://github.com/Anusha-Pwr/Crypto"><Button>Github</Button></a>
                        {/* <a href="https://gitbhub.com">Github</a> */}
                    </PortfolioItem>


                    <PortfolioItem>
                        <PortfolioImg src={Icon2} />
                        <h3>Notes taking app</h3>
                        <a href="https://github.com/Anusha-Pwr/Notes"><Button>Github</Button></a>
                    </PortfolioItem>


                    <PortfolioItem>
                        <PortfolioImg src={Icon3} />
                        <h3>Pizza ordering app</h3>
                        <a href="https://github.com/Anusha-Pwr/Pizza-app"><Button>Github</Button></a>
                    </PortfolioItem>

                </PortfolioContainer>
            </Container >
        </Section>
    );
}

export default Projects;