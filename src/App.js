import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Home, ProjectsPage, Resources } from "./features";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";

const App = () => (
	<div className="App">
		<Header />
		<Nav />
		<Routes>
			<Route path="/Resources" element={<Resources />} />
			<Route path="/Projects" element={<ProjectsPage />} />
			<Route path="/" element={<Home />} />
		</Routes>

		<Footer />
	</div>
);

export default App;
