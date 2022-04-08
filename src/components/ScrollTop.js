import React from "react";
import "./ScrollTop.scss";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BsArrowUpCircle
      title="Go Top"
      className="scrollToTop"
      onClick={scrollToTop}
    />
  );
};

export default ScrollTop;
