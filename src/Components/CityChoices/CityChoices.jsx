import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../Search';
import { selectCity } from '../../Actions/weather';
// import { youWonAction } from '../../actions/user';
// import { checkForWin, findMove } from '../../helpers/weatherLogic';
import './CityChoices.css';

// const xImage = require('../../assets/X.png');
// const oImage = require('../../assets/O.png');

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
                              selectCity: selectCity
                             }, dispatch);
};
 

class CityChoices extends Component {

  render () {
    return (
      <div className="city-choices">
          {this.props.weather.map((city, index) =>
            (<div className={"city-option"} key={index}
              onClick={() => this.props.selectCity(index, city.city, city.state)}>
              <div className={"hvr-shrink"}>
              {city.city},  {city.state}
              </div>
            </div>)
          )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityChoices);



 