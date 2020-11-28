// ========== REACT ========== //
import React from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// ========== COMPONENTS ========== //
import UserInput from "../UserInput/UserInput";

// ========== STYLES & MUI ========== //
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import dayIcon from "../icons/day.svg";
import "./Nav.css";

const Nav = (props) => (
  <div className="nav">
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Typography>
          <h1 className="nav-title">
            <img src={dayIcon} alt="spinning sun icon" />
            SunSpotter
          </h1>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <div className="location-input-form">
          <UserInput />
        </div>
      </Grid>
    </Grid>
  </div>
);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Nav);
