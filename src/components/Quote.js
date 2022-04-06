import React from "react";
import "./Quote.scss";
import { ImQuotesLeft } from "react-icons/im";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Quote = () => {
  const quotes = [
    "Truth can only be found in one place: the code.",
    "Clean code always looks like it was written by someone who cares.",
    "Of course bad code can be cleaned up. But it's very expensive.",
    "Would you rather Test-First, or Debug-Later ?",
    "Clean code should read like well-written prose."
  ];

  const quote = quotes.map((quote, key) => {
    return <p key={key}>{quote}</p>;
  });

  return (
    <div className="quote">
      <ImQuotesLeft className="decor" />
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        interval={10000}
        showStatus={false}
        showThumbs={false}
      >
        {quote}
      </Carousel>
      <span>— Robert C. Martin —</span>
    </div>
  );
};

export default Quote;
