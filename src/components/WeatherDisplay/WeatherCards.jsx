// ========== WeatherCards ========== //
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

class WeatherCards extends Component {

    render () {

        return(
            <div>
                <Box width="25%" minHeight="25%">
                    <Card
                        className='weatherDisplayCard'

                    >
                    {this.props.displayHighTemperatureF}
                    {this.props.displayLowTemperatureF}
                    {this.props.displayConditions}
                    <img src={this.props.displayWeatherIcon} />
                    </Card>
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

export default withRouter(connect(mapStateToProps)(WeatherCards));