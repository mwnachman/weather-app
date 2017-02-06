import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findCity, findCityByZip } from '../../Actions/weather';
import { parseCityName } from '../../Helpers/weather';

import './Search.css';


const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
                              findCity: findCity,
                              findCityByZip: findCityByZip
                             }, dispatch);
};
 

class Search extends Component {

  // ADD AN EVENT HANDLER TO CLEAR THE TEXT OF THE INPUT

  findCity(city) {
    if ( parseInt(city) === Number(city) ) {
      this.props.findCityByZip(city);
    } else {
      let parsedCity = parseCityName(city);
      this.props.findCity(parsedCity[0], parsedCity[1]); 
    }
  }

  render () {
    return (
      <div className="search">
        <p>Search</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.findCity(e.target.elements[0].value);
        }}>
          <input placeholder='' type='text' name='city'/>
          <p className="example-text">(e.g., "Boulder, CO" or "80301")</p>
          <button type='submit'>
            Submit 
          </button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);



 