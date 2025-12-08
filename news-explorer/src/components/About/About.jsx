import React from "react";
import aboutImg from "../../vendor/avatarImg.jpg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__author">
        <div className="about__author-avatar">
          <img src={aboutImg} alt="Author" />
        </div>
        <div className="about__author-info">
          <h2 className="about__author-title">About the Author</h2>
          <div className="about__author-text">
            <p>
              Hi, I’m James Holden Moore — a full-stack software engineer who
              loves creating clean, user-friendly digital experiences. I work
              with JavaScript, React, Node.js, and a handful of other tools that
              help turn ideas into smooth, functional web apps.
            </p>
            <p>
              I trained at TripleTen’s Full Stack Software Engineering program,
              where I built real projects, learned industry best practices, and
              discovered how much fun it is to bring concepts to life with great
              design and solid code. I enjoy solving problems, making things
              look good, and helping clients build products people actually want
              to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
