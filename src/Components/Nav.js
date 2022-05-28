import { Routes, Route, Link } from "react-router-dom";
import Home from "./main-pages/Home";
import Projects from "./main-pages/Projects";

const Nav = () => (
  <nav>
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
    <Routes>
      <Route path="/Projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </nav>
);

export default Nav;
