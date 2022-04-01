import "./App.css";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "./components/About";
import Quote from "./components/Quote";
import Header from "./components/Header";

function App() {
  return (
    <ParallaxProvider>
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Quote />
      <About />
    </ParallaxProvider>
  );
}

export default App;
