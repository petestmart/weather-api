// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'

// ========== COMPONENTS ========== //
import WeatherCards from './WeatherCards';
import CurrentWeather from './CurrentWeather';
// import DateGenerator from './DateGenerator';

// ========== MATERIAL UI ========== //
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// ========== STYLES ========== //
import './WeatherDisplay.css';

const styles = theme => ({
    root: {
        flexGrow: 0,
    },
    control: {
        padding: theme.spacing(2),
    }
});

class WeatherDisplay extends Component {

    componentDidMount() {
        this.getDate();
    }

    state = {
        today: '',
        tomorrow: '',
        twoDay: '',
    }

    getDate = () => {
        let today = new Date();
        let tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        let twoDay = new Date(tomorrow);
        twoDay.setDate(twoDay.getDate() + 1);
        let dd = today.getDate();
        let ee = tomorrow.getDate();
        let ff = twoDay.getDate();
        let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let mm = monthName[today.getMonth()];  //January=0
        let nn = monthName[tomorrow.getMonth()];
        let oo = monthName[twoDay.getMonth()];
        let yyyy = today.getFullYear();
        let zzzz = tomorrow.getFullYear();
        let aaaa = twoDay.getFullYear(); 
        let dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let dayOfWeek = dayName[today.getDay()];
        let tomorrowDayOfWeek = dayName[tomorrow.getDay()];
        let twoDayDayOfWeek = dayName[twoDay.getDay()];


        today = `Today: ${dayOfWeek} ${mm} ${dd}, ${yyyy}`;
        tomorrow = `Tomorrow: ${tomorrowDayOfWeek} ${nn} ${ee}, ${zzzz}`;
        twoDay = `${twoDayDayOfWeek} ${oo} ${ff}, ${aaaa}`;
        this.setState({
            today: today,
            tomorrow: tomorrow,
            twoDay: twoDay,
        })
    }

    render() {
        const { classes } = this.props;

        // Declarations //
        let currentTemperatureF;
        let currentCondition;
        let currentWeatherIcon;
        let lastUpdated;
        let todayTemperatureMaxF;
        let todayTemperatureLowF
        let todayCondition;
        let todayWeatherIcon;
        let todayDate;
        let tomorrowTemperatureMaxF;
        let tomorrowTemperatureLowF;
        let tomorrowCondition;
        let tomorrowWeatherIcon;
        let tomorrowDate;
        let twoDayTemperatureMaxF;
        let twoDayTemperatureLowF;
        let twoDayCondition;
        let twoDayWeatherIcon;
        let twoDayDate;
        let locationCity;
        let locationRegion;


        if (this.props.reduxState.weatherDataReducer.length !== 0) {
            

            let weatherDataReducer = this.props.reduxState.weatherDataReducer;
            let currentWeather = weatherDataReducer.current;
            let todayWeather = weatherDataReducer.forecast.forecastday[0].day;
            let tomorrowWeather = weatherDataReducer.forecast.forecastday[1].day;
            let twoDayWeather = weatherDataReducer.forecast.forecastday[2].day;

            // Date
            // todayDateRaw = weatherDataReducer.forecast.forecastday[0].date;
            // todayDate = todayDateRaw => {

            // };
            todayDate = this.state.today;
            tomorrowDate = this.state.tomorrow;
            twoDayDate = this.state.twoDay;

            // Location
            locationCity = weatherDataReducer.location.name;
            locationRegion = weatherDataReducer.location.region;

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
                {this.props.todayDate}
                <Grid 
                    container
                    className={classes.root} 
                    spacing={1}
                >
                    <Grid item xs={12} md={12}>
                        {/* Current Weather */}
                        <CurrentWeather
                            displayDate={todayDate}
                            displayCurrentTemperatureF={currentTemperatureF}
                            displayCurrentCondition={currentCondition}
                            displayCurrentWeatherIcon={currentWeatherIcon}
                            displayLastUpdated={lastUpdated}
                            displayLocationCity={locationCity}
                            displayLocationRegion={locationRegion}
                        />

                    </Grid>
                    <Grid item sm={12} md={3}>
                        {/* Today's Low and High */}
                        <WeatherCards
                            displayDate={todayDate}
                            displayHighTemperatureF={todayTemperatureMaxF}
                            displayLowTemperatureF={todayTemperatureLowF}
                            displayConditions={todayCondition}
                            displayWeatherIcon={todayWeatherIcon}
                        />
                    </Grid>
                    <Grid item sm={12} sm={3}>
                        {/* Tomorrow's Weather */}
                        <WeatherCards
                            displayDate={tomorrowDate}
                            displayHighTemperatureF={tomorrowTemperatureMaxF}
                            displayLowTemperatureF={tomorrowTemperatureLowF}
                            displayConditions={tomorrowCondition}
                            displayWeatherIcon={tomorrowWeatherIcon}
                        />
                    </Grid>
                    <Grid item sm={12} md={3}>
                        {/* Two Day Weather */}
                        <WeatherCards
                            displayDate={twoDayDate}
                            displayHighTemperatureF={twoDayTemperatureMaxF}
                            displayLowTemperatureF={twoDayTemperatureLowF}
                            displayConditions={twoDayCondition}
                            displayWeatherIcon={twoDayWeatherIcon}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withStyles(styles)(connect(mapStateToProps)(WeatherDisplay));