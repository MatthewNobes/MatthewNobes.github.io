import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './Components/header/header';
import Footer from './Components/footer/footer';

import Home from './Components/main-pages/Home';
import About from './Components/main-pages/About';
import Projects from './Components/main-pages/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <nav>
      <Router className="React-Router">
      <div>
        <ul className="React-Router-Group">
          <li className="React-Router-headlinks">
            <Link className="React-Router-Links" to="/">Home</Link>
          </li>
          <li className="React-Router-headlinks">
            <Link className="React-Router-Links" to="/about">About</Link>
          </li>
          <li className="React-Router-headlinks">
            <Link className="React-Router-Links" to="/Projects">Projects</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      </nav>
      <body>
        <p>
          The main contents will go here.
        </p>
        <footer className="App-Footer">
          <Footer />
        </footer>
      </body>
    </div>
  );
}

export default App;
