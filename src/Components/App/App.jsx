import React, { Component } from 'react';
import logo from '../../Assets/sun.png';
import './App.css';
import ChosenCityWeather from '../ChosenCityWeather';
import CityChoices from '../CityChoices';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-contents">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Weather</h1>
          </div>
        </div>
        <CityChoices />
        <ChosenCityWeather />
      </div>
    );
  }
}

export default App;
