// ========== Current Weather ========== //
// Child of WeatherDisplay.jsx

// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';

// ========== MATERIAL UI ========== //
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// ========== STYLES ========== //
import './WeatherDisplay.css';

const styles = theme => ({
    root: {
        flexGrow: 2,
    },
    card: {
        height: 200,
        width: 300,
    }
});

class CurrentWeather extends Component {

    render() {
        const { classes } = this.props;
        if (this.props.reduxState.weatherDataReducer.length === 0) {
            return null;
        }
        else {
            return (
                <div>
                    <Box className="current-weather-display">
                        <Card
                            className={classes.card}
                        >
                            <CardContent>
                                <Typography>
                                    Current Temp {this.props.displayCurrentTemperatureF}
                                </Typography>
                                <img src={this.props.displayCurrentWeatherIcon} alt={this.props.displayCurrentCondition} />
                                <Typography>
                                    {this.props.displayCurrentCondition} 
                                </Typography>
                                <Typography>
                                    {this.props.displayLocationCity} - {this.props.displayLocationRegion}
                                </Typography>
                                <Typography>
                                    Updated {this.props.displayLastUpdated}
                                </Typography>
                            </CardContent>
                        </Card>
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

export default withStyles(styles)(connect(mapStateToProps)(CurrentWeather));