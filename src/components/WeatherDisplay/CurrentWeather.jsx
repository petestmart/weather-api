// ========== Current Weather ========== //
// Child of WeatherDisplay.jsx

// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// ========== MATERIAL UI ========== //
import Box from '@material-ui/core/Box';

// ========== STYLES ========== //
import './WeatherDisplay.css';


class CurrentWeather extends Component {

    render() {

        return (
            <div>
                <Box width="50%" minHeight="25%">
                        {this.props.displayCurrentTemperatureF}
                        {this.props.displayCurrentCondition}
                        <img src={this.props.displayCurrentWeatherIcon} alt={this.props.displayCurrentCondition}/>
                        {this.props.displayLocationCity}
                        {this.props.displayLocationRegion}
                        {this.props.displayLastUpdated}
                </Box>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(mapStateToProps)(CurrentWeather));