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

  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };
  }

  handleInputChange(e) {
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  findCity(city) {
    if ( parseInt(city, 10) === Number(city) ) {
      this.props.findCityByZip(city);
      this.setState({ city: '' });
    } else {
      let parsedCity = parseCityName(city);
      this.props.findCity(parsedCity[0], parsedCity[1]); 
      this.setState({ city: '' });
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
          <input placeholder="" type="text" name="city"
            value={this.state.city}
            onChange={(e) => this.handleInputChange(e)}></input>
          <p className="example-text">(e.g., "Boulder, CO" or "80301")</p>
          <button type="submit">
            Submit 
          </button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);



 