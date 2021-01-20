import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./component/HomePage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route exact path="/home" component={HomePage} />
				<Route exact path="/register" component={RegisterPage} />
			</Switch>
		</Router>
	);
}

export default App;
