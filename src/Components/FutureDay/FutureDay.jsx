import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './FutureDay.css';


const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
                              // selectCity: selectCity
                             }, dispatch);
};
 

class FutureDay extends Component {

  render () {
    return (
      <div className="future-day">
        <p>{this.props.day.date}</p>
        <p>{this.props.day.condition}</p>
        <p>High: {this.props.day.high} &deg;F</p>
        <p>Low: {this.props.day.low} &deg;F</p>
        <div> 
          <img src={require(`../../Assets/${this.props.day.conditionPicture}.png`)} 
          role='presentation' className='future-day-img'/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(FutureDay);



 