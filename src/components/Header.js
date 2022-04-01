import React, { useEffect, useState } from "react";
import Loader from "./animation/Loader";
import "./Header.scss";

const Header = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const [y, setY] = useState(0);
  const [top, setTop] = useState(true);

  const handleScroll = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setScrollUp(true);
    } else if (y < window.scrollY) {
      setScrollUp(false);
    } else if (y > 0) {
      setTop(false);
    }
    setY(window.scrollY);  
  };

  useEffect(() => {
    window.addEventListener('scroll', e => handleScroll(e));
    return () => {
      window.removeEventListener('scroll', (e) => handleScroll(e));
    }
  }, [y]);

  return (
    <div className="header-container" style={{opacity: scrollUp ? '1' : '0', backgroundColor: scrollUp && !top ? '#3636367e' : 'transparent'}}>
      <Loader />
      <nav className="nav">
        <a href="#intro">Intro</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      <button className="resume">resume</button>
      </nav>
    </div>
  );
};

export default Header;
