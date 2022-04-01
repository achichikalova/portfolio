import React, { useEffect, useState } from "react";
import Loader from "./animation/Loader";
import "./Header.scss";

const Header = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const [y, setY] = useState(0);
  const [top, setTop] = useState(true);
  console.log(y);
  console.log(top);

  const handleScroll = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setScrollUp(true);
    } else if (y < window.scrollY) {
      setScrollUp(false);
    }
    setY(window.scrollY);
  };

  const handleTop = () => { 
    if (y === 0) {
      setTop(true);
    } else {
      setTop(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));
    handleTop();
    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, [y]);

  return (
    <div
      className="header-container"
      style={{
        opacity: scrollUp || top ? "1" : "0",
        backgroundColor: scrollUp && !top ? "#3636367e" : "transparent",
      }}
    >
      <Loader />
      <nav className="nav">
        <a href="#intro">Intro</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a className="resume">
          <span>resume</span>
        </a>
      </nav>
    </div>
  );
};

export default Header;
