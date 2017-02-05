import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Search from '../Search';
import { findCity, findCityByZip } from '../../Actions/weather';
// import { youWonAction } from '../../actions/user';
// import { serializeForm }  from '../../Helpers/form';
// import { checkForWin, findMove } from '../../helpers/weatherLogic';
import './Search.css';

// const xImage = require('../../assets/X.png');
// const oImage = require('../../assets/O.png');

const mapStateToProps = (state) => {
  return {
    // user: state.user,
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
    // console.log('city', city);
    // let data = serializeForm(e);
    if ( parseInt(city) === Number(city) ) {
      this.props.findCityByZip(city);
    } else {
      let cityArray = city.split(',');
      // console.log('city array', cityArray);
      let cityName = cityArray[0];
      let state = cityArray[1];
      let cityWords = cityName.toLowerCase().split(' ');
      for (let i = 0; i < cityWords.length; i++) {
        let cityWordLetterArray = cityWords[i].split('');
        // console.log('citywordletterarray', cityWordLetterArray);
        cityWordLetterArray[0] = cityWordLetterArray[0].toUpperCase();
        // console.log('citywordletterarray', cityWordLetterArray);
        cityWords[i] = cityWordLetterArray.join('');
      }
      city = cityWords.join(' ');
      // console.log('state', state);
      let stateName = state.split('').slice(1).join('').toUpperCase();
      // console.log('statename', stateName);
      this.props.findCity(city, stateName); 
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



 