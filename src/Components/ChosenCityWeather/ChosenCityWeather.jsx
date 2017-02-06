import React, { Component } from 'react';
import { connect } from 'react-redux';
import Today from '../Today';
import Next10Days from '../Next10Days';
import './ChosenCityWeather.css';

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
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

export default connect(mapStateToProps)(ChosenCityWeather);
