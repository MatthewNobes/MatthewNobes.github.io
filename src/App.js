import "./App.css";
import Header from "./Components/placeholder/Header/Header";
import Footer from "./Components/placeholder/Footer/Footer";
import Nav from "./Components/Nav";

const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
    </header>
    <Nav />
    <footer className="App-Footer">
      <Footer />
    </footer>
  </div>
);

export default App;
