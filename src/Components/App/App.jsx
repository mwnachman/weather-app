import React, { Component } from 'react';
// import logo from '../../Assets/sun.png';
import Headroom from 'react-headroom';
import Search from '../Search';
import CityChoices from '../CityChoices';
import ChosenCityWeather from '../ChosenCityWeather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headroom>
          <div className="left-header">
            <h1 className="weather-header">Weather</h1>
            <Search className="search-nav"/>
          </div>
          <CityChoices className="city-options-nav"/>
        </Headroom>
        <ChosenCityWeather />
      </div>
    );
  }
}

export default App;
