// ========== REACT ========== // 
import React, { Component } from "react";
import { connect } from "react-redux";

// ========== STYLE ========== //
import "./UserInput.css";
import swal from 'sweetalert';

// ========== PAGE ELEMENTS ========== //
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
            swal("Howdy, Friend", "You'll need to enter a location before we can name your weather info.")
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
                <h2>Enter Location</h2>
                <span className="location-input">
                    <form>
                        <TextField
                            onChange={this.handleChange}
                            id="outlined-basic"
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
            </div>
        ) // end return
    } // end render
} // end class

export default connect()(UserInput);