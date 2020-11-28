// ========== Current Weather ========== //
// Child of WeatherDisplay.jsx

// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';

// ========== MATERIAL UI ========== //
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
                    <Box className="current-weather-display" width="25%" minHeight="25%">
                        <Paper>
                            <CardContent>
                                <Typography>
                                    Current Temp {this.props.displayCurrentTemperatureF}
                                </Typography>
                                <Typography>
                                    {this.props.displayCurrentCondition} <img src={this.props.displayCurrentWeatherIcon} alt={this.props.displayCurrentCondition} />
                                </Typography>
                                <Typography>
                                    {this.props.displayLocationCity} - {this.props.displayLocationRegion}
                                </Typography>
                                <Typography>
                                    Updated {this.props.displayLastUpdated}
                                </Typography>
                            </CardContent>
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