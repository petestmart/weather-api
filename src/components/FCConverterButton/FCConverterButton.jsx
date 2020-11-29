// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';


// ========== MATERIAL UI ========== //
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 2,
    },
    card: {
        height: 200,
        width: 300,
    }
});

class FCConverterButton extends Component {

    state = {
        fahrenheit: true,
    }

    handleClick = async () => { 
        await this.setState((fahrenheitState) => ({
                fahrenheit: !fahrenheitState.fahrenheit
            }));
            this.sendState()
    }

    sendState = () => {
        this.props.dispatch({ type: 'SET_FAHRENHEIT_STATE', action: this.state.fahrenheit })
    }

    render() {

        if (this.props.reduxState.weatherDataReducer.length === 0){
            return (
                <div></div>
            )
        }
        else if (this.state.fahrenheit === false) {
            return (
                <div>
                    <Button
                        onClick={this.handleClick}
                        variant="contained"
                        color="secondary"
                    >
                        Convert To Fahrenheit
                </Button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Button
                        onClick={this.handleClick}
                        variant="contained"
                        color="primary"
                    >
                        Convert To Celcius
                </Button>
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

export default withStyles(styles)(connect(mapStateToProps)(FCConverterButton));