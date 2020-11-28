// ========== Current Weather ========== //
// Child of WeatherDisplay.jsx

// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// ========== MATERIAL UI ========== //
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

// ========== STYLES ========== //
import './WeatherDisplay.css';


class CurrentWeather extends Component {

    render() {

        // let iconDisplay
        // let displayCurrentCondition=this.props.displayCurrentCondition;

        // if (this.props.reduxState.weatherDataReducer.length != 0) {

        //     console.log('displayCurrentCondition', displayCurrentCondition);
        //     switch (displayCurrentCondition) {
        //         case 'Sunny':
        //             iconDisplay = <img src={sunny} />
        //             break;
        //         case 'Rain':
        //             iconDisplay = <img src={rainy} />
        //             break;
        //         default:
        //             iconDisplay = <img src={weatherIcon} />
        //             break;
        //     }
        // }

        
        return (
            <div>
                <Box width="25%" minHeight="25%">
                        {this.props.displayCurrentTemperatureF}
                        {this.props.displayCurrentCondition}
                        <img src={this.props.displayCurrentWeatherIcon} />
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