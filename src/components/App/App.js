// ========== REACT ========== //
import React, { Component } from "react";

import { connect } from "react-redux";

// ========== COMPONENTS ========== //
import CurrentWeather from "../WeatherDisplay/CurrentWeather"
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import UserInput from "../UserInput/UserInput";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

// ========== MATERIAL UI ========== //
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// ========== STYLES ========== //
import "./App.css";

const styles = (theme) => ({
  root: {
    flexGrow: 0,
  },
  control: {
    padding: theme.spacing(2),
  },
});

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Nav />
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12}>
            <Grid item xs={4}>
              {/* <UserInput /> */}
            </Grid>
            <Grid item xs={4}>
              {/* <CurrentWeather /> */}
            </Grid>
          </Grid>
        </Grid>
        <WeatherDisplay />
        <Footer />
        
      </div>
    );
  }
}

export default withStyles(styles)(connect()(App));
