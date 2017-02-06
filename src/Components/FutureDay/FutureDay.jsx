import React, { Component } from 'react';
import { connect } from 'react-redux';

import './FutureDay.css';


const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};
 

class FutureDay extends Component {

  render () {
    const { day } = this.props;
    return (
      <div className="future-day">
        <p className="future-p">{day.date}</p>
        <p className="future-p">{day.condition}</p>
        <p className="future-p">High: {day.high} &deg;F</p>
        <p className="future-p">Low: {day.low} &deg;F</p>
        <div> 
          <img src={require(`../../Assets/${day.conditionPicture}.png`)} 
          role='presentation' className='future-day-img'/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FutureDay);



 