import React from "react";
import "./page.css";
const About = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh"
        }}
      >
        <h1>About Me</h1>
      </div>
      <div>
        <hr />
        <p>
          I am enthusiastic about the appearance and functionalities of
          interfaces.
          <br />I also enjoy taking up challenging projects that will give me
          <br />
          opportunities to keep learning and shocase my problem solving skills,
          <br />
          education and experiences in design and web development.
          <br />
          Every project is fun.
        </p>
      </div>
    </div>
  );
};

export default About;
