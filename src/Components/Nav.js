import { Link } from "react-router-dom";

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
  </nav>
);

export default Nav;
