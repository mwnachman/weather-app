import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCity } from '../../Actions/weather';
import './Today.css';

const mapStateToProps = (state) => {
  return {
    weatherToday: state.weather[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
                              selectCity: selectCity
                             }, dispatch);
};
 

class Today extends Component {

  componentWillMount() {
    this.props.selectCity(0, this.props.weatherToday.city, this.props.weatherToday.state);
  }

  render () {
    const { weatherToday } = this.props;
    return (
      <div>
        {!!weatherToday.forecastNext10 && 
          <div>
            <div className="chosen-city-today">
              <div className="current-data">
                <h2>{weatherToday.city}, {weatherToday.state}</h2>
                <h3>{weatherToday.today.date}</h3>
                <h2>Currently: {weatherToday.today.currentTemp} &deg;F</h2>
                <h2>{weatherToday.today.currentCondition}</h2>
              </div>
              <div className='high-low'>
                <div>High: {weatherToday.today.high} &deg;F</div>
                <div>Low: {weatherToday.today.low} &deg;F</div>
              </div>
              <div> 
                <img src={require(`../../Assets/${weatherToday.today.currentConditionPicture}.png`)} 
                role='presentation' className='today-img'/>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Today);



 