// ========== REACT ========== //
import React, { Component } from "react";
import {
  HashRouter as Router,
} from "react-router-dom";
import { connect } from "react-redux";

// ========== COMPONENTS ========== //
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import UserInput from "../UserInput/UserInput";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

import "./App.css";

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <UserInput />
          <WeatherDisplay />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
