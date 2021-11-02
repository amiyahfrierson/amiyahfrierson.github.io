import React from "react";
import FadeInSection from "./FadeInSection";
import Environment1 from './assets/WyldchildProto/environment.png';
import Environment2 from './assets/WyldchildProto/environment2.png';
import Environment3 from './assets/WyldchildProto/environment3.png';
import Environment4 from './assets/WyldchildProto/environment4.png';
import Environment5 from './assets/WyldchildProto/environment5.png';
import Character from './assets/WyldchildProto/character.png';

import gameDesignDoc from './assets/WyldchildUI/GameDesignDoc.pdf';
import baseSample from './assets/WyldchildProto/baseSample.txt';
import cameraSample from './assets/WyldchildProto/cameraSample.txt';
import "../styles/ProjectDesc.css";


class Project2 extends React.Component {
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

        return (

            <div id="projectPage">
                <div className="section-header ">
                    <span className="section-title">/ Wyldchild: Unity Protoype</span>
                </div>

                <div className="projects-card">
                    <section><div className = "card-desc"><b>Note: This prototype is an ongoing work in progress!</b></div></section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> referencing the game design document </div>

                            <div className="card-desc">
                                Before I began any work on this project, I formulated a game design document to focus intent, scope, and organize my efforts.
                                I described in as much detail as possible the facets of the project, such as story, game mechanics, and user-interface.
                                Having this document as a reference has only helped me in my journey in solo-developing "Wyldchild".
                                <div className="big-link"><a href={gameDesignDoc} target="blank"><br />Read the game design document here.</a></div>

                            </div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> designing and placing the environment </div>
                            <div className="card-desc">
                                The Unity Asset Store has a ton of cool free stuff! Who knew? Using what the store had to offer,
                                I built the entire scene of "Wyldchild" from scratch. I'm particularly proud of the center-piece
                                that is the Yggdrasil-Bifrost hybrid towering over the camp. The low-poly art style suits
                                this project, as this is my introduction to Unity and it offers great adaptability while still
                                being aesthetically pleasing.
                            </div>
                            <div className="image"><img src={Environment1} /></div>
                            <div className="image"><img src={Environment2} /></div>
                            <div className="image"><img src={Environment3} /></div>
                            <div className="image"><img src={Environment4} /></div>
                            <div className="image"><img src={Environment5} /></div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> the joys of camera rigging </div>
                            <div className="card-desc">
                                Now I needed a way to let the player move around the environment as they pleased.
                                I did this by implementing a traditional real-time strategy game camera, in which you
                                can use the mouse to pan and rotate the camera around the given scene. I had great help
                                watching <a href="https://www.youtube.com/watch?v=rnqF6S7PfFA&t=927s" target="blank">Game Dev Guide's tutorial </a>
                                to implement enjoyable camera movement focused around smoothness and responsiveness.
                                Let's move around the scene!
                            </div>

                            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/kssrofSOc-Q" title="YouTube video player"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="big-link"><a href={cameraSample} target="blank"><br />See the camera rig script.</a></div>

                        </FadeInSection>
                    </section>                    
                    
                    <section>
                        <FadeInSection>
                            <div className="card-title"> throwing in the UI </div>
                            <div className="card-desc">
                                This is a quick and dirty implementation of the user-interface I designed in Adobe XD.
                                More facets of the UI, such as resources and quest menus, will be added as I work on the
                                respective systems.
                            </div>
                            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/eVV-rvM2QSw" title="YouTube video player"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> character classes </div>
                            <div className="card-desc">
                                <div className="image"><img src={Character} /></div>

                                After all that setup, we can finally get to the meat of the game. "Wyldchild" makes use of
                                four character classes, what is essentially the Mage, Warrior, Rogue, and Engineer. Each
                                have designated WYLD stats: Wisdom, Youth, Lithe and Design. They are also each
                                given a random, gender-neutral name. We can script their classes and stat values into Unity
                                and apply the components onto each of the character prefabs that are already placed in-game.
                            </div>
                            <div className="big-link"><a href={baseSample} target="blank"><br />See the full base & character class script.</a></div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> what i'm working on now </div>
                            <div className="card-desc">
                                This was just a snippet of this project's fruition. Right now, you can catch me working on...

                                <ul>
                                    <li>Animating the characters to move them around the camp.</li>
                                    <li>Finishing the UI using the mockup as a reference.</li>
                                    <li>Adding a quest system so our heroes have something to do!</li>
                                </ul>

                            </div>
                        </FadeInSection>
                    </section>




                    <section>
                        <FadeInSection>
                            <div className="go-back"><a href="/">Back to Home</a></div>
                        </FadeInSection>
                    </section>

                </div>

            </div>
        );
    }
}

export default Project2;
