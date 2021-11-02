import React from "react";
import FadeInSection from "./FadeInSection";
import Preview from './assets/WyldchildUI/ProjectPreview.png';
import Inspo from './assets/WyldchildUI/inspoPage.png';

import Start from './assets/WyldchildUI/startMenu.png';
import Options from './assets/WyldchildUI/options.png';
import Paused from './assets/WyldchildUI/paused.png';
import InGame from './assets/WyldchildUI/inGame.png';

import Build1 from './assets/WyldchildUI/buildMode1.png';
import Build2 from './assets/WyldchildUI/buildMode2.png';
import Build3 from './assets/WyldchildUI/buildMode3.png';
import Build4 from './assets/WyldchildUI/buildMode4.png';

import Journey1 from './assets/WyldchildUI/journey1.png';
import Journey15 from './assets/WyldchildUI/journey15.png';
import Journey2 from './assets/WyldchildUI/journey2.png';
import Journey3 from './assets/WyldchildUI/journey3.png';
import Journey4 from './assets/WyldchildUI/journey4.png';
import Journey5 from './assets/WyldchildUI/journey5.png';

import Party1 from './assets/WyldchildUI/party1.png';
import Party2 from './assets/WyldchildUI/party2.png';
import Party3 from './assets/WyldchildUI/party3.png';

import Vector1 from './assets/WyldchildUI/vector1.png';
import Vector3 from './assets/WyldchildUI/vector3.png';

import Misc1 from './assets/WyldchildUI/misc1.png';
import Misc2 from './assets/WyldchildUI/misc2.png';
import Misc3 from './assets/WyldchildUI/misc3.png';

import gameDesignDoc from './assets/WyldchildUI/GameDesignDoc.pdf';
import "../styles/ProjectDesc.css";


class Project1 extends React.Component {
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
                    <span className="section-title">/ Wyldchild: Game User-Interface Mockup</span>
                </div>

                <div className="projects-card">
                    <section>
                    <FadeInSection>
                            <div className="card-title"> the game design document </div>

                        <div className="card-desc">
                                Before I began any work on this project, I formulated a game design document to focus intent, scope, and organize my efforts.
                                I described in as much detail as possible the facets of the project, such as story, game mechanics, and user-interface.
                                Having this document as a reference has only helped me in my journey in solo-developing "Wyldchild". 
                            <div className="big-link"><a href={gameDesignDoc} target="blank"><br/>Read the game design document here.</a></div>

                        </div>

                        </FadeInSection>
                    </section>

                    <section>
                    <FadeInSection>
                        <div className="card-title"> inspiration from existing works </div>

                        <div className="image"><img src={Inspo} /></div>
                        
                            <div className="card-desc">
                                Hades integrated its mythological theme with its interface, using laurels and metallic gold (reminescent of greek "drachmae")
                                for loading screens and modal window decorations.

                                <div><br />I especially enjoyed Frostpunk's use of setting in the user-interface design. The modal windows are fading and wisp-like,
                                with a blizzard blearing through the screen without obstructing information, driving point the snowy hellscape the player must manage through.</div>

                                <div><br/>Assassin's Creed: Valhalla was able to expertly combine elements of an ancient Nordic setting with modern, minimalistic user-interface.
                                This manifests through the use of clean lines and sans-serif text with gritty backgrounds and overlays.</div>


                                <div><br />Darkest Dungeon is bold, gothic, and dark, with sharp blackletter fonts and creeping vingrette on the borders of the interface.
                                I particularly liked the hero management panels and building upgrade panels.</div>
                        </div>
                    </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> creating the "UI Bible" </div>

                            <div className="image"><img src={Preview} /></div>

                            <div className="card-desc">
                                Now that I had my inspiration, I could design my user interface with a frame of reference for industry standards and
                                good user-interface practices. All assets, including vector images and fonts, are free for personal use.
                            </div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> start menu & in-game UI </div>
                            <div className="image"><img src={Start} /></div>
                            <div className="image"><img src={Options} /></div>
                            <div className="image"><img src={InGame} /></div>
                            <div className="image"><img src={Paused} /></div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> build mode & upgrades </div>
                            <div className="image"><img src={Build1} /></div>
                            <div className="image"><img src={Build2} /></div>
                            <div className="image"><img src={Build3} /></div>
                            <div className="image"><img src={Build4} /></div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> going on excursions </div>
                            <div className="image"><img src={Journey1} /></div>
                            <div className="image"><img src={Journey15} /></div>
                            <div className="image"><img src={Journey2} /></div>
                            <div className="image"><img src={Journey3} /></div>
                            <div className="image"><img src={Journey5} /></div>
                            <div className="image"><img src={Journey4} /></div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> party manager </div>
                            <div className="image"><img src={Party1} /></div>
                            <div className="image"><img src={Party2} /></div>
                            <div className="image"><img src={Party3} /></div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> miscellaneous </div>
                            <div className="image"><img src={Vector1} /></div>
                            <div className="image"><img src={Vector3} /></div>
                            <div className="image"><img src={Misc1} /></div>
                            <div className="image"><img src={Misc2} /></div>
                            <div className="image"><img src={Misc3} /></div>
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

export default Project1;
