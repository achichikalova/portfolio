import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <About />
      <Skills />
      <Projects />
    </ParallaxProvider>
  );
}

export default App;
