import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently studying <b>Computer Science</b> at{" "}
        <b> Louisiana Tech University </b>, and concentrating in Graphics & Game Design.
      </p>
    );
    const two = (
      <p>
            My passions come from believing that technology is an art, and I seek to <b>bridge the gap between tech and humanities </b>
            through <b>people-first design</b> and <b>intelligent technological principles</b>.
            <br />
   
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:amiyahfrierson@outlook.com">
          amiyahfrierson@outlook.com
        </a>{" "}
        and let's talk!
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Python",
      "React.js",
      "Java",
      "C/C++",
      "C#",
      "HTML & CSS",
      "Adobe XD",
      "Adobe Photoshop",
      "Unity Engine",
      "Git"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/me.png");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Languages and tools I've worked with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
