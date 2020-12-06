import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Screen/Home";
import About from "./Screen/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
