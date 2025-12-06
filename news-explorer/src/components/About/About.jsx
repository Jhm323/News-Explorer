import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="about__title">About the author</h1>
        <p className="about__text">
          Hi, I’m James Holden Moore — a full-stack software engineer who loves
          creating clean, user-friendly digital experiences. I work with
          JavaScript, React, Node.js, and a handful of other tools that help
          turn ideas into smooth, functional web apps.
        </p>
        <p className="about__text">
          I trained at TripleTen’s Full Stack Software Engineering program,
          where I built real projects, learned industry best practices, and
          discovered how much fun it is to bring concepts to life with great
          design and solid code. I enjoy solving problems, making things look
          good, and helping clients build products people actually want to use.
        </p>
        <div className="author__avatar"></div>
      </div>
    </section>
  );
}

export default About;
