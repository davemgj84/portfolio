import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./index.css";

import Nav from "./components/Nav";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
