import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./features/Home";
import Projects from "./features/Projects";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div className="App">
    <Header />
    <Nav />
    <Routes>
      <Route path="/Projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
