import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./Countries";
import Details from "./Details";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Countries />}>
					<Route path="countries/:cca2" element={<Details />} />
				</Route>
				<Route path="countries" element={<Countries />} />
			</Routes>
		</Router>
	);
};

export default App;
