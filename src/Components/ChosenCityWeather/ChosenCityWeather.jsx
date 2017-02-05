import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Today from '../Today';
import Next10Days from '../Next10Days';
import './ChosenCityWeather.css';

const mapStateToProps = (state) => {
  return {
    // user: state.user,
    weather: state.weather
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
                              // checkWin: checkForWin,
                             }, dispatch);
};
 

class ChosenCityWeather extends Component {

  render () {
    return (
      <div className="chosen-city">
        <Today />
        <Next10Days />
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(ChosenCityWeather);
