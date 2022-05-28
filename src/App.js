import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Home from "./Components/main-pages/Home";
import Projects from "./features/Projects";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
    </header>
    <Nav />
    <Routes>
      <Route path="/Projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
