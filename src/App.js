import './App.css';
import Header from './Components/header/header';
import Footer from './Components/footer/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
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
