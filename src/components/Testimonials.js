import React from "react";
import "./Testimonials.scss";
import { ImQuotesLeft } from "react-icons/im";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Roya Chobineh",
      message:
        "Antonina is very ambitious, has great communication skills, is patient and can deliver under pressure to further her career. She goes above and beyond what is expected regularly, always raising her bar and then exceeding it. Her work ethic is strong and is generally a great person to work with. She is an asset to any team she joins and I highly recommend her.",
      title: "Software Developer",
    },
    {
      name: "Emily Ke",
      message:
        "I've worked with Antonina for my final project at LHL and I was impressed by her both her ability to demonstrate her understanding in of JS in React and initiative to take on additional tasks at hand. She is very hard-working and we worked well as a team. I would recommend Antonina to anyone, knowing that she will do her best to be successful. Great job Antonina keep up the good work!",
      title: "Full-Stack Web Developer",
    },
    {
      name: "Kanisha Dabreo",
      message:
        "I worked with Antonina as a fellow Lighthouse Labs Web Development student. Collaborating with her on our full-stack budgeting app Stacks was an absolutely wonderful experience. There is no better colleague to have on your team than Antonina. She is one of the most dedicated professionals I've worked with and is willing to put that extra help whenever you need it. Antonina's hard work, focus, and commitment to the team were evident. She always went beyond expectations to find solutions that worked for the team. Her attention to detail, eye for design, and backend skills make her an asset to any full-stack project. I would love to work with her again in the future and highly recommend her.",
      title: "Digital Designer",
    },
  ];

  const quote = testimonials.map((testimonial, key) => {
    return (
      <div className="testimonial">
        <p key={key}>{testimonial.message}</p>
        <span>
          {testimonial.name} — {testimonial.title}
        </span>
      </div>
    );
  });

  return (
    <div className="testimonials">
      <ImQuotesLeft className="decor" />
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        interval={40000}
        showStatus={false}
        showThumbs={false}
      >
        {quote}
      </Carousel>
    </div>
  );
};

export default Testimonials;
