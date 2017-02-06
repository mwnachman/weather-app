import React, { Component } from 'react';
// import logo from '../../Assets/sun.png';
import Headroom from 'react-headroom';
import CityChoices from '../CityChoices';
import ChosenCityWeather from '../ChosenCityWeather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headroom>
          <h1>Weather</h1>
        </Headroom>
        <CityChoices />
        <ChosenCityWeather />
      </div>
    );
  }
}

export default App;
