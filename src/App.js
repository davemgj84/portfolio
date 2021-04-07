import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const _ScrollToTop = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  };
  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ScrollToTop>
            <Nav />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </ScrollToTop>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
