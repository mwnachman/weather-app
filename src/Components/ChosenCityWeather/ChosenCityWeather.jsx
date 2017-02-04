import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { computerMoveAction, selectSquareAction } from '../../actions/weather';
// import { youWonAction } from '../../actions/user';
// import { checkForWin, findMove } from '../../helpers/weatherLogic';
import './ChosenCityWeather.css';

// const xImage = require('../../assets/X.png');
// const oImage = require('../../assets/O.png');
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const mapStateToProps = (state) => {
  return {
    user: state.user,
    weather: state.weather
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
                              // checkWin: checkForWin,
                              // youWonAction: youWonAction,
                              // computerMove: computerMoveAction,
                              // selectSquare: selectSquareAction
                             }, dispatch);
};
 

class ChosenCityWeather extends Component {

  // checkWin(user, square, ChosenCityWeather) {
  //   this.props.youWonAction(user, square, ChosenCityWeather);
  // }

  // computerMove(user, move) {
  //   this.props.computerMove(user, move);
  //   let ChosenCityWeatherCopy = this.props.weather.slice();
  //   ChosenCityWeatherCopy[move] = user;
  //   this.props.youWonAction(user, move, ChosenCityWeatherCopy);
  // }

  // makeMove(square) {
  //   let ChosenCityWeatherCopy = this.props.weather.slice();
  //   ChosenCityWeatherCopy[square] = this.props.user.xOrY;
  //   let computeruser = this.props.user.xOrY === "X" ? "O" : "X";
  //   if (this.props.user.usersTurn === true && this.props.weather[square] === null) {
  //     this.props.selectSquare(square, this.props.user.xOrY);
  //     this.checkWin(this.props.user.xOrY, square, ChosenCityWeatherCopy);
  //     setTimeout((function() {this.computerMove(computeruser, findMove(computeruser, ChosenCityWeatherCopy))}).bind(this), 500);
  //   }
  // };

  render () {
    return (
      <div className="ChosenCityWeather">
       
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(ChosenCityWeather);

 // {numbers.map(number =>
 //          (<span className={"square-" + number} key={number}
 //            onClick={() =>
 //              this.makeMove(number)
 //            }>
 //            {this.props.weather[number] === "X" &&
 //            <img alt="X" src={xImage} />
 //            }
 //            {this.props.weather[number] === "O" &&
 //            <img alt="O" src={oImage} />
 //            }
 //           </span>)
 //        )}
 //        {this.props.user.userWon === true &&
 //          <div className='win-or-lose'><div className='win-text'>YOU WIN!</div></div>  
 //        }
 //        {this.props.user.userWon === false &&
 //          <div className='win-or-lose'><div className='win-text'>YOU LOST!</div></div>
 //        }
 //        {this.props.user.userWon === "draw" &&
 //          <div className='win-or-lose'><div className='win-text'>DRAW</div></div>  
 //        }

