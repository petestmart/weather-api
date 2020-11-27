// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// ========== COMPONENTS ========== //
import WeatherCards from './WeatherCards';

// ========== MATERIAL UI ========== //
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

// ========== STYLES ========== //
import './WeatherDisplay.css';

class WeatherDisplay extends Component {

    render() {

        let currentTemperatureF

        if (this.props.reduxState.weatherDataReducer.length != 0) {
            currentTemperatureF = this.props.reduxState.weatherDataReducer.current.temp_f;
        }


        return (
            
            <div>
                <WeatherCards 
                    currentTemperatureF={currentTemperatureF}
                />
                <Box width="25%" minHeight="25%">
                    <Card 
                        className='weatherDisplayCard'
                        
                    >
                        
                        {/* {currentTemperatureF} */}
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

export default withRouter(connect(mapStateToProps)(WeatherDisplay));