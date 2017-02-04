import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../Search';
// import { selectCity } from '../../Actions/weather';
// import { youWonAction } from '../../actions/user';
// import { checkForWin, findMove } from '../../helpers/weatherLogic';
import './Next10Days.css';

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
                              // selectCity: selectCity
                              // youWonAction: youWonAction,
                              // computerMove: computerMoveAction,
                              // selectSquare: selectSquareAction
                             }, dispatch);
};
 

class Next10Days extends Component {

  render () {
    return (
      <div className="city-choices">
          
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Next10Days);



 