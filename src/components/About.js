import React from "react";
import { image } from "../data/data";

function About() {
  
  return <div id="about">About
   <h2>About Me</h2>
      <p>
        I am a dedicated web developer with a passion for creating clean, efficient, and user-friendly applications. I thrive on problem-solving and am always eager to learn new technologies to enhance my skills.
      </p>
      <img src={image} alt="I made this" />
      </div>;
}

export default About;
