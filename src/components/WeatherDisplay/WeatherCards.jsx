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
        flexGrow: 1,
    },
    card: {
        height: 400,
        width: 400,
    }
    // control: {
    //     padding: theme.spacing(2),
    // }
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
                    <Box width="25%" minHeight="25%" className='weatherDisplayCard'>
                        <Card
                            className={classes.card}
                        >
                            {this.props.displayHighTemperatureF}
                            {this.props.displayLowTemperatureF}
                            {this.props.displayConditions}
                            {icon}
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