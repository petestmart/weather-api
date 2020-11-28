// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherDisplay from './WeatherDisplay';

class DateGenerator extends Component {

    componentDidMount() {
        this.getDate();
    }

    state = {
        today: '',
        tomorrow: '',
        twoDay: '',
    }

    //get today's date for default selection.
    getDate = () => {
        let today = new Date()
        let dd = today.getDate()
        let mm = today.getMonth() + 1 //January=0
        let yyyy = today.getFullYear()
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = `${mm}-${dd}-${yyyy}`;
        this.setState({
            today: today
        })
    }

    render(){
        // this.getDate()
        if (this.props.reduxState.weatherDataReducer.length !== 0) {
            return (
                this.state
            )
        }
        return (
            <div></div>
            
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(DateGenerator);