import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Credits from "./components/Credits";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
    return (
      <div className="App">
        <div id="content">
            <Router>
                <Switch>
                <Route exact path="/" render={() =>
                <React.Fragment>
                <Intro />
                <Projects />
                <About />
                <Experience />
                <Credits/>
                </React.Fragment>
                } />
                <Route exact path="/WyldchildUI" exact component={Project1} />
                <Route exact path="/WyldchildPrototype" exact component={Project2} />
                </Switch>
            </Router>
        </div>
        <SidebarNav />
    </div>
  );
}

export default App;
