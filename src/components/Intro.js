import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <div id="gazi-model">
          <GaziModel></GaziModel>
        </div>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, i'm "}
            <span className="intro-name">{"amiyah"}</span>
            {"."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I develop what I design.</div>
          <div className="intro-desc">
                    I am a student software engineer and UI developer based in Louisiana. I pursue all things
                    entertainment media with a specialized interest in front-end and video game development. 
          </div>
          <a
            href="mailto:amiyahfrierson@outlook.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hello"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
