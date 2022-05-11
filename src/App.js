import "./App.css";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import Socials from "./components/Socials";

function App() {
  return (
    <ParallaxProvider>
      <Header />
      <Socials />
      <Intro />
      <Skills />
      <Projects />
      <Testimonials />
      <About />
    </ParallaxProvider>
  );
}

export default App;
