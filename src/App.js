import "./App.css";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <Intro />
      <Skills />
      <Projects />
    </ParallaxProvider>
  );
}

export default App;
