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
    user: state.user,
    weather: state.weather
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
                              selectCity: selectCity
                              // youWonAction: youWonAction,
                              // computerMove: computerMoveAction,
                              // selectSquare: selectSquareAction
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
          <Search />
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(CityChoices);



 