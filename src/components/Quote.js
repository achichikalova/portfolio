import React from "react";
import "./Quote.scss";
import { ImQuotesLeft } from "react-icons/im";

const Quote = () => {
  return (
    <div className="quote">
      <ImQuotesLeft className="decor"/>
      <p>Clean code should read like well-written prose.</p>
      <span>— Robert C. Martin —</span>
    </div>
  );
};

export default Quote;
