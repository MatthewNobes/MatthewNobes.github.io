import "./App.css";
import { Header, Footer, Nav } from "./Components";
import { Home, ProjectsPage, Resources } from "./features";
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
