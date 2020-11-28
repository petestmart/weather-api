// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// ========== COMPONENTS ========== //
import WeatherCards from './WeatherCards';
import CurrentWeather from './CurrentWeather';

// ========== MATERIAL UI ========== //
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

// ========== STYLES ========== //
import './WeatherDisplay.css';

class WeatherDisplay extends Component {

    render() {

        // Declarations //
        let currentTemperatureF;
        let currentCondition;
        let currentWeatherIcon;
        let lastUpdated;
        let todayTemperatureMaxF;
        let todayTemperatureLowF
        let todayCondition;
        let todayWeatherIcon;
        let tomorrowTemperatureMaxF;
        let tomorrowTemperatureLowF;
        let tomorrowCondition;
        let tomorrowWeatherIcon;
        let twoDayTemperatureMaxF;
        let twoDayTemperatureLowF;
        let twoDayCondition;
        let twoDayWeatherIcon
        
        

        if (this.props.reduxState.weatherDataReducer.length != 0) {
            let weatherDataReducer = this.props.reduxState.weatherDataReducer;
            let currentWeather = weatherDataReducer.current;
            let todayWeather = weatherDataReducer.forecast.forecastday[0].day;
            let tomorrowWeather = weatherDataReducer.forecast.forecastday[1].day;
            let twoDayWeather = weatherDataReducer.forecast.forecastday[2].day;

            // Current
            currentTemperatureF = currentWeather.temp_f;
            currentCondition = currentWeather.condition.text;
            currentWeatherIcon = currentWeather.condition.icon;
            lastUpdated = currentWeather.last_updated;
            // Today
            todayTemperatureMaxF = todayWeather.maxtemp_f;
            todayTemperatureLowF = todayWeather.mintemp_f;
            todayCondition = todayWeather.condition.text;
            todayWeatherIcon = todayWeather.condition.icon;
            // Tomorrow
            tomorrowTemperatureMaxF = tomorrowWeather.maxtemp_f;
            tomorrowTemperatureLowF = tomorrowWeather.mintemp_f;
            tomorrowCondition = tomorrowWeather.condition.text;
            tomorrowWeatherIcon = tomorrowWeather.condition.icon;
            // Two Day
            twoDayTemperatureMaxF = twoDayWeather.maxtemp_f;
            twoDayTemperatureLowF = twoDayWeather.mintemp_f;
            twoDayCondition = twoDayWeather.condition.text;
            twoDayWeatherIcon = tomorrowWeather.condition.icon;
            
        }


        return (
            <div>
                {/* Current Weather */}
                <CurrentWeather 
                    displayCurrentTemperatureF={currentTemperatureF}
                    displayCurrentCondition={currentCondition}
                    displayCurrentWeatherIcon={currentWeatherIcon}
                    displayLastUpdated={lastUpdated}
                />
                {/* Today's Low and High */}
                <WeatherCards
                    displayHighTemperatureF={todayTemperatureMaxF}
                    displayLowTemperatureF={todayTemperatureLowF}
                    displayConditions={todayCondition}
                    displayWeatherIcon={todayWeatherIcon}
                />
                {/* Tomorrow's Weather */}
                <WeatherCards
                    displayHighTemperatureF={tomorrowTemperatureMaxF}
                    displayLowTemperatureF={tomorrowTemperatureLowF}
                    displayConditions={tomorrowCondition}
                    displayWeatherIcon={tomorrowWeatherIcon}
                />
                {/* Two Day Weather */}
                <WeatherCards
                    displayHighTemperatureF={twoDayTemperatureMaxF}
                    displayLowTemperatureF={twoDayTemperatureLowF}
                    displayConditions={twoDayCondition}
                    displayWeatherIcon={twoDayWeatherIcon}
                />
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