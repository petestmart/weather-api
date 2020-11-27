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
                Weather Card Here 
                <div>
                    <Box width="25%" minHeight="25%">
                        <Card
                            className='weatherDisplayCard'

                        >
                        Hello
                        {this.props.currentTemperatureF}
                        </Card>
                    </Box>
                </div>
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