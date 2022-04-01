import React, { useEffect, useState } from "react";
import Loader from "./animation/Loader";
import "./Header.scss";

const Header = () => {

  return (
    <div className="header-container">
      <Loader className='logo' />
      <nav className="nav">
        <a href="#intro">Intro</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <button className="resume"><span>resume</span></button>
      </nav>
    </div>
  );
};

export default Header;
