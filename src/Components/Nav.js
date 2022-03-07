import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./main-pages/Home";
import Projects from "./main-pages/Projects";

const Nav = () => (
  <nav>
    <Router className="React-Router">
      <ul className="React-Router-Group">
        <li className="React-Router-Headlinks">
          <Link className="React-Router-Links" to="/">
            About
          </Link>
        </li>
        <li className="React-Router-Headlinks">
          <Link className="React-Router-Links" to="/Projects">
            Projects
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </nav>
);

export default Nav;
