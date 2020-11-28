// ========== Current Weather ========== //
// Child of WeatherDisplay.jsx

// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';

// ========== MATERIAL UI ========== //
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

// ========== STYLES ========== //
import './WeatherDisplay.css';


class CurrentWeather extends Component {

    render() {
        if (this.props.reduxState.weatherDataReducer.length === 0) {
            return null;
        }
        else {
            return (
                <div>
                    <Box width="50%" minHeight="25%">
                        <Paper>
                            {this.props.displayCurrentTemperatureF}
                            {this.props.displayCurrentCondition}
                            <img src={this.props.displayCurrentWeatherIcon} alt={this.props.displayCurrentCondition} />
                            {this.props.displayLocationCity}
                            {this.props.displayLocationRegion}
                            {this.props.displayLastUpdated}
                        </Paper>
                    </Box>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(CurrentWeather);