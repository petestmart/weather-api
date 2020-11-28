// ========== REACT ========== // 
import React, { Component } from "react";
import { connect } from "react-redux";

// ========== STYLE ========== //
import "./UserInput.css";
import swal from 'sweetalert';

// ========== PAGE ELEMENTS ========== //
import Button from "@material-ui/core/Button";
import CardContent from '@material-ui/core/CardContent';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 0,
    },
    control: {
        padding: theme.spacing(2),
    }
});

class UserInput extends Component {

    state = {
        location: '',
    }

    // Changes State To What is Being Typed By The User Into The Input
    handleChange = (event) => {
        this.setState({
            location: event.target.value,
        })
    }

    // Handles Click Event When Submit Button Is Pressed After Typing Text Into The Input
    handleClick = (event) => {
        event.preventDefault();

        // Alert For Empty Input Field
        if (this.state.location === '') {
            swal("Howdy, Friend", "You'll need to enter a location before we can provide your weather info.")
        }

        else {
            this.props.dispatch({
                type: 'SEARCH_LOCATION',
                payload: this.state.location,
            })
        }

    } // End function handleClick

    render() {
        return (
            <div>
                {/* <Paper className="location-input"> */}
                    {/* <CardContent> */}
                        {/* <h2>Enter Location</h2> */}
                        <span >
                            <form>
                                <TextField
                                    onChange={this.handleChange}
                                    id="filled-basic"
                                    label="Search City or Zip"
                                    variant="outlined"
                                    className="input"
                                    size="small"
                                />
                                <Button
                                    onClick={this.handleClick}
                                    size="small"
                                    className="submitButton"
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </form>
                        </span>
                    {/* </CardContent> */}
                {/* </Paper> */}
            </div>
        ) // end return
    } // end render
} // end class

export default connect()(UserInput);