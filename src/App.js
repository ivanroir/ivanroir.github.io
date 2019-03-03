import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <React.Fragment>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

export default App;
