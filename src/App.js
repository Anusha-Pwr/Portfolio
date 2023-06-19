import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Who from "./Components/Who";
import Work from "./Components/Work";
import Test from "./Components/Test";
import styled from "styled-components";
import Projects from "./Components/Projects";

const Container = styled.div`
 height: 100vh;
 background-color: rebeccapurple;
 color: white;
 background: url("/Portfolio/img/bg.jpeg");
 scroll-snap-type: y mandatory;
 overflow-y: auto;
 sroll-behaviour: smooth;
 &::-webkit-scrollbar{
  display: none;
 }
`

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Work />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
