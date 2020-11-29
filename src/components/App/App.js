// ========== REACT ========== //
import React, { Component } from "react";

import { connect } from "react-redux";

// ========== COMPONENTS ========== //
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

// ========== MATERIAL UI ========== //
import { withStyles } from '@material-ui/core/styles';

// ========== STYLES ========== //
import "./App.css";

const styles = (theme) => ({
  root: {
    flexGrow: 2,
  },
  control: {
    padding: theme.spacing(2),
  },
});

class App extends Component {
  componentDidMount() {
    
  }

  render() {

    return (
      <div>
        <Nav />
        <WeatherDisplay />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(connect()(App));
