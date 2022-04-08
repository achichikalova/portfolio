import React, { useEffect, useState } from "react";
import Logo from "./animation/Logo";
import "./Header.scss";

const Header = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const [y, setY] = useState(0);
  const [top, setTop] = useState(true);

  useEffect(() => {
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
    };
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
        '--opacity': scrollUp || top ? "1" : "0",
        '--transparency': scrollUp && !top ? "#3636367e" : "transparent",
      }}
    >
      <a aria-label="Logo" href="/">
        <Logo />
      </a>
      <nav className="nav">
        <a href="#intro">Intro</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a
          role="button"
          className="resume"
          href="https://resume.creddle.io/resume/hcpmeb781kc"
          target="_blank"
          rel="noreferrer"
        >
          <span>resume</span>
        </a>
      </nav>
    </div>
  );
};

export default Header;
