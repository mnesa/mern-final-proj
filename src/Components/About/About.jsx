import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto py-5 my-5">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore
        totam, nesciunt officia eos, fugit exercitationem magnam neque maiores
        ipsa quia quam mollitia quibusdam maxime iure obcaecati animi
        necessitatibus porro, tempore voluptates odio voluptate ex vero
        explicabo? Voluptatum, excepturi numquam, quisquam ea aspernatur
        asperiores sequi possimus incidunt aperiam a porro!
      </p>
    </div>
  );
};

export default About;
