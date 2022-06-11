import { Link } from "react-router-dom";
import css from "./Nav.module.css";

export const Nav = () => (
  <nav className={css.ReactRouterGroup}>
    <Link className={css.ReactRouterLinks} to="/">
      About
    </Link>
    <Link className={css.ReactRouterLinks} to="/Projects">
      Projects
    </Link>
    <Link className={css.ReactRouterLinks} to="/Resources">
      Resources
    </Link>
  </nav>
);
