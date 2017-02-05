import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FutureDay from '../FutureDay';

import './Next10Days.css';


const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    //NEED THIS????????????????????????????????
                             }, dispatch);
};
 

class Next10Days extends Component {



  render () {
    return (
      <div className="next-10-days">
        {this.props.weather[0].forecastNext10 && 
          this.props.weather[0].forecastNext10.map((day, index) =>
          (<FutureDay day={day} key={index} />)
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Next10Days);



 