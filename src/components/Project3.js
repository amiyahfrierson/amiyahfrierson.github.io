import React from "react";
import FadeInSection from "./FadeInSection";
import Preview from './assets/LyrebornUI/projectPreview.png';
import Inspo from './assets/LyrebornUI/inspo.png';

import Main from './assets/LyrebornUI/mainMenu.png';
import Location from './assets/LyrebornUI/locationFanfare.png';
import Game1 from './assets/LyrebornUI/inGame1.png';
import Game2 from './assets/LyrebornUI/inGame2.png';
import Game3 from './assets/LyrebornUI/inGame3.png';

import Pause1 from './assets/LyrebornUI/pause1.png';
import Pause2 from './assets/LyrebornUI/pause2.png';
import Pause3 from './assets/LyrebornUI/pause3.png';
import Pause4 from './assets/LyrebornUI/pause4.png';

import Upgrades from './assets/LyrebornUI/upgrades.png';
import Typo from './assets/LyrebornUI/typo.png';

import "../styles/ProjectDesc.css";


class Project3 extends React.Component {
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
                    <span className="section-title">/ Lyreborn: Game User-Interface Mockup</span>
                </div>

                <div className="projects-card">

                    <section>
                        <FadeInSection>
                            <div className="card-title"> brainstorming for Unreal Engine </div>

                            <div className="card-desc">
                                The idea for Lyreborn was created when I wanted to develop a new project in Unreal Engine.
                                It features the main character, Lazaros, the last son Apollo who must fulfill his destiny of
                                defeating his wayward siblings before time runs out. He only has his bow, a variety of arrows, and the clothes
                                on his back.

                                <div><br />Unlike most games, it's not game over if Lazaros dies, not truly. Instead, the night resets,
                                and Lazaros is plunged back to the beginning of the game with any upgrades you've earned for him while fighting
                                through the city. The further you progress, the more rewards you'll reap!</div>

                            </div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> inspiration from existing works </div>

                            <div className="image"><img src={Inspo} /></div>

                            <div className="card-desc">
                                Detroit: Become Human (2018) has a special place in my heart with its unique player choices and consequences based on those decisions.
                                It's user interface greatly reflects the futuristic, dystopian world that Detroit has fallen into and must dig itself out of. 

                                <div><br />Star Wars Jedi: Fallen Order is provides great study on user-interface. While keeping the retro look that brings the
                                nostalgia out of the Star Wars franchise, the game maintains a sleek and neat look.</div>

                            </div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> creating the "UI Bible" </div>

                            <div className="image"><img src={Preview} /></div>

                            <div className="card-desc">
                                My goal was to make a minimalistic interface that while conveyed the dark, cyberpunk-ish theme that is pervasive in the setting
                                throughout Lyreborn. All assets, including vector images, icons, and fonts, are free for personal use.
                            </div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> start menu & in-game UI </div>
                            <div className="image"><img src={Main} /></div>
                            <div className="image"><img src={Location} /></div>
                            <div className="image"><img src={Game1} /></div>
                            <div className="image"><img src={Game2} /></div>
                            <div className="image"><img src={Game3} /></div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> pause menu, settings, load & quit </div>
                            <div className="image"><img src={Pause1} /></div>
                            <div className="image"><img src={Pause2} /></div>
                            <div className="image"><img src={Pause3} /></div>
                            <div className="image"><img src={Pause4} /></div>
                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> upgrades </div>
                            <div className="image"><img src={Upgrades} /></div>


                        </FadeInSection>
                    </section>

                    <section>
                        <FadeInSection>
                            <div className="card-title"> typography </div>
                            <div className="image"><img src={Typo} /></div>

      
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

export default Project3;
