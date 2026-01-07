import React from "react";
import aboutImg from "../../vendor/avatarImg.jpg";
import "./About.css";

const About = React.memo(() => {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__author">
        <div className="about__author-avatar">
          <img
            src={aboutImg}
            alt="Portrait of James Holden Moore, the author"
          />{" "}
        </div>
        <div className="about__author-info">
          <h2 id="about-title" className="about__author-title">
            About the Author
          </h2>{" "}
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
    </section>
  );
});

About.propTypes = {}; // for future props
About.displayName = "About";
export default About;
