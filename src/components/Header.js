import React, { useEffect, useState } from "react";
import Logo from "./animation/Logo";
import { Link } from "react-scroll";
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
        "--opacity": scrollUp || top ? "1" : "0",
        "--transparency": scrollUp && !top ? "#3636367e" : "transparent",
      }}
    >
      <Link aria-label="Logo" to="intro">
        <Logo />
      </Link>
      <nav className="nav">
        <Link to="intro">Intro</Link>
        <Link to="projects">Projects</Link>
        <Link to="about">About</Link>
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
