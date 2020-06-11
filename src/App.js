import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Films from "./components/Films";
import Home from "./components/Home";
import FilmDetail from "./components/FilmDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/films" exact component={Films} />
          <Route path="/films/:id" component={FilmDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
