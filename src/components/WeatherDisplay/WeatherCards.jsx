// ========== WeatherCards ========== //
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

class WeatherCards extends Component {

    render () {
        const { classes } = this.props;
        let icon = <img src={this.props.displayWeatherIcon} />;

        if (this.props.reduxState.weatherDataReducer.length === 0) {
            icon = '';
        }

        if (this.props.reduxState.weatherDataReducer.length === 0) {
            return null;
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
                                <Typography>
                                    High Temp {this.props.displayHighTemperatureF}
                                </Typography>
                                {icon}
                                <Typography>
                                    {this.props.displayConditions}
                                </Typography>
                                <Typography>
                                    Low Temp {this.props.displayLowTemperatureF}
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