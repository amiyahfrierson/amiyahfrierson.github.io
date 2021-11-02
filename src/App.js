import React from "react";
import { Route, Switch } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';
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
              <HashRouter basename={process.env.PUBLIC_URL}>
              <Switch>
              <Route exact path="/" render={() =>
        <React.Fragment>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Credits/>
        </React.Fragment>
                  } />
        <Route exact path="/WyldchildUI" exact component={Project1} />
        <Route exact path="/WyldchildPrototype" exact component={Project2} />
              </Switch>
              </HashRouter>
      </div>
        <SidebarNav />

    </div>
  );
}

export default App;
