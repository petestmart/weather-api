// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';

// ========== COMPONENTS ========== //
import WeatherCards from './WeatherCards';
import CurrentWeather from './CurrentWeather';


// ========== MATERIAL UI ========== //
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// ========== STYLES ========== //
import './WeatherDisplay.css';
import swal from 'sweetalert';

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
        let currentTemperatureC;
        let currentCondition;
        let currentWeatherIcon;
        let lastUpdated;
        let todayTemperatureMaxF;
        let todayTemperatureMaxC;
        let todayTemperatureLowF;
        let todayTemperatureLowC
        let todayCondition;
        let todayWeatherIcon;
        let todayDate;
        let tomorrowTemperatureMaxF;
        let tomorrowTemperatureMaxC
        let tomorrowTemperatureLowF;
        let tomorrowTemperatureLowC;
        let tomorrowCondition;
        let tomorrowWeatherIcon;
        let tomorrowDate;
        let twoDayTemperatureMaxF;
        let twoDayTemperatureMaxC;
        let twoDayTemperatureLowF;
        let twoDayTemperatureLowC;
        let twoDayCondition;
        let twoDayWeatherIcon;
        let twoDayDate;
        let locationCity;
        let locationRegion;

        if (this.props.reduxState.errorReducer === 500){
            console.log('weatherDataReducer length', this.props.reduxState.weatherDataReducer.length)
            console.log('this.props.reduxState.errorReducer', this.props.reduxState.errorReducer)
            swal("Location Error", "There were no results from the entered location. Please try again.")
            this.props.dispatch({
                type: 'SET_WEATHER_DATA',
                payload: '',
            })
            this.props.dispatch({
                type: 'LOCATION_ERROR',
                action: 'reset'
            })
        }

        else if (this.props.reduxState.weatherDataReducer.length !== 0 ) {
            

            let weatherDataReducer = this.props.reduxState.weatherDataReducer;
            let currentWeather = weatherDataReducer.current;
            let todayWeather = weatherDataReducer.forecast.forecastday[0].day;
            let tomorrowWeather = weatherDataReducer.forecast.forecastday[1].day;
            let twoDayWeather = weatherDataReducer.forecast.forecastday[2].day;

            // Dates
            todayDate = this.state.today;
            tomorrowDate = this.state.tomorrow;
            twoDayDate = this.state.twoDay;

            // Location
            locationCity = weatherDataReducer.location.name;
            locationRegion = weatherDataReducer.location.region;

            // Current
            currentTemperatureF = currentWeather.temp_f;
            currentTemperatureC = currentWeather.temp_c;
            currentCondition = currentWeather.condition.text;
            currentWeatherIcon = currentWeather.condition.icon;
            lastUpdated = currentWeather.last_updated;
            // Today
            todayTemperatureMaxF = todayWeather.maxtemp_f;
            todayTemperatureMaxC = todayWeather.maxtemp_c;
            todayTemperatureLowF = todayWeather.mintemp_f;
            todayTemperatureLowC = todayWeather.mintemp_c;
            todayCondition = todayWeather.condition.text;
            todayWeatherIcon = todayWeather.condition.icon;
            // Tomorrow
            tomorrowTemperatureMaxF = tomorrowWeather.maxtemp_f;
            tomorrowTemperatureMaxC = tomorrowWeather.maxtemp_c;
            tomorrowTemperatureLowF = tomorrowWeather.mintemp_f;
            tomorrowTemperatureLowC = tomorrowWeather.mintemp_c;
            tomorrowCondition = tomorrowWeather.condition.text;
            tomorrowWeatherIcon = tomorrowWeather.condition.icon;
            // Two Day
            twoDayTemperatureMaxF = twoDayWeather.maxtemp_f;
            twoDayTemperatureMaxC = twoDayWeather.maxtemp_c;
            twoDayTemperatureLowF = twoDayWeather.mintemp_f;
            twoDayTemperatureLowC = twoDayWeather.mintemp_c;
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
                            displayCurrentTemperatureC={currentTemperatureC}
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
                            displayHighTemperatureC={todayTemperatureMaxC}
                            displayLowTemperatureF={todayTemperatureLowF}
                            displayLowTemperatureC={todayTemperatureLowC}
                            displayConditions={todayCondition}
                            displayWeatherIcon={todayWeatherIcon}
                        />
                    </Grid>
                    <Grid item sm={12} sm={3}>
                        {/* Tomorrow's Weather */}
                        <WeatherCards
                            displayDate={tomorrowDate}
                            displayHighTemperatureF={tomorrowTemperatureMaxF}
                            displayHighTemperatureC={tomorrowTemperatureMaxC}
                            displayLowTemperatureF={tomorrowTemperatureLowF}
                            displayLowTemperatureC={tomorrowTemperatureLowC}
                            displayConditions={tomorrowCondition}
                            displayWeatherIcon={tomorrowWeatherIcon}
                        />
                    </Grid>
                    <Grid item sm={12} md={3}>
                        {/* Two Day Weather */}
                        <WeatherCards
                            displayDate={twoDayDate}
                            displayHighTemperatureF={twoDayTemperatureMaxF}
                            displayHighTemperatureC={twoDayTemperatureMaxC}
                            displayLowTemperatureF={twoDayTemperatureLowF}
                            displayLowTemperatureC={twoDayTemperatureLowC}
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