import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
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
    const projects = {
      "Wyldchild: Game UI Mockup": {
        desc:
          "A solo-developed roleplaying game made in Unity.",
            techStack: "Adobe XD, Adobe Photoshop",
            link: "/#/WyldchildUI",

      },
      "Wyldchild: Unity Prototype": {
        desc:
          "Taking my game design document and UI mockups, I implented my concepts with functionality into Unity.",
          techStack: "Unity 2021, C#",
          link: "/WyldchildPrototype",

      },
      "Amiyah.dev": {
        desc:
          "The website you're viewing right now! Intended to showcase my passion projects and personal interests.",
          techStack: "React.js, CSS",
          link: "https://github.com/amiyahfrierson/amiyahfrierson.github.io",
          targ: "blank",

      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 30 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                        <div className="see-project"><a href={projects[key]["link"]} target={projects[key]["targ"]}>See Project</a></div>

                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
