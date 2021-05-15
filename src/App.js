import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import TableAuto from './components/pages/TableAuto';

function App() {
  return (
		<Router>
			<NavTabs />
			<Route exact path="/" component={About} />
			<Route exact path="/table" component={TableAuto} />
		</Router>
	);
}

export default App;
