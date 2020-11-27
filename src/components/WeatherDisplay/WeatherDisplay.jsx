// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// ========== MATERIAL UI ========== //
import Card from '@material-ui/core/Card';

class WeatherDisplay extends Component {

    render() {

        let currentWeather

        if (this.props.reduxState.weatherDataReducer.length != 0){
            currentWeather = this.props.reduxState.weatherDataReducer.current.temp_f;    
        }
        

        return(
            <div>
                <Card>
                    Here's Where The Weather Data Will Display
                    {currentWeather}
                </Card>
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