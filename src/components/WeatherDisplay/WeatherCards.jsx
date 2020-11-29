// ========== WeatherCards ========== //
// Child of WeatherDisplay.jsx

// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';

// ========== MATERIAL UI ========== //
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
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

class WeatherCards extends Component {

    render () {
        const { classes } = this.props;
        let icon = <img src={this.props.displayWeatherIcon} alt={this.props.displayConditions}/>;

        if (this.props.reduxState.weatherDataReducer.length === 0) {
            icon = '';
        }

        if (this.props.reduxState.weatherDataReducer.length === 0) {
            return null;
        }
        else if (this.props.reduxState.FCReducer===false){
            return (
                <div>
                    <Box className='weatherDisplayCard'>
                        <Card
                            className={classes.card}
                        >
                            <CardContent>
                                <Typography>
                                    {this.props.displayDate}
                                </Typography>
                                {icon}
                                <Typography>
                                    {this.props.displayConditions}
                                </Typography>
                                <Typography>
                                    High {this.props.displayHighTemperatureC}ºC
                                </Typography>
                                <Typography>
                                    Low {this.props.displayLowTemperatureC}ºC
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Box className='weatherDisplayCard'>
                        <Card
                            className={classes.card}
                        >
                            <CardContent>
                                <Typography>
                                    {this.props.displayDate}
                                </Typography>
                                    {icon}
                                <Typography>
                                    {this.props.displayConditions}
                                </Typography>
                                <Typography>
                                    High {this.props.displayHighTemperatureF}ºF
                                </Typography>
                                <Typography>
                                    Low {this.props.displayLowTemperatureF}ºF
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

export default withStyles(styles)(connect(mapStateToProps)(WeatherCards));