import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleArticlePage from "./components/SingleArticlePage";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/singlepage">
					<SingleArticlePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
