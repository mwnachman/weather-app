export const createInitialWeatherState = (cities) => {
  let citiesArray = [];
  for (var i = 0; i < cities.length; i++) {
    var tempObj = {};
    for (var key in cities[i]) {
      tempObj[key] = cities[i][key];
    }
    citiesArray.push(tempObj);
  }
  return citiesArray;
}

export const convertDayName = (day) => {
  if ( day === 'Mon' ) {
    return 'Monday, ';
  } else if ( day === 'Tue' ) {
    return 'Tuesday, ';
  } else if ( day === 'Wed' ) {
    return 'Wednesday, ';
  } else if ( day === 'Thu' ) {
    return 'Thursday, ';
  } else if ( day === 'Fri' ) {
    return 'Friday, , ';
  } else if ( day === 'Sat' ) {
    return 'Saturday, ';
  } else if ( day === 'Sun' ) {
    return 'Sunday, ';
  }
}

export const convertDate = (dateToConvert) => {
  let formattedDate = [];
  let date = dateToConvert.split(' ');
  console.log('date', date);
  let ordinal;
  if ( date[0] === '01' ) {
    ordinal = '1st,';
  } else if ( date[0] === '02' ) {
    ordinal = '2nd,';
  } else if ( date[0] === '03' ) {
    ordinal = '3rd,';
  } else if ( date[0] === '21' ) {
    ordinal = '21st,';
  } else if ( date[0] === '22' ) {
    ordinal = '22nd,';
  } else if ( date[0] === '23' ) {
    ordinal = '23rd,';
  } else if ( date[0] === '31' ) {
    ordinal = '31st,';
  } else if ( date[0] === '12' ) {
    ordinal = '12th,';
  } else {
    if ( date[0][0] === '0' ) {
      ordinal = date[0].split('').slice(1).concat('th,').join('');
    } else {
      ordinal = date + 'th,';
    }
  }
  formattedDate.push(date[1]);
  formattedDate.push(ordinal);
  formattedDate.push(date[2]);
  // console.log('formatted Date', formattedDate);
  return formattedDate.join(' ');
}

export const createData = (response, city, state) => {
  let res = response.data.query.results.channel.item;
  let data = {};
  data.city = city;
  data.state = state;
  data.today = {};
  data.today.low = res.forecast[0].low;
  data.today.high = res.forecast[0].high;
  let date = convertDate(res.forecast[0].date);
  let day = convertDayName(res.forecast[0].day);
  data.today.date = day + date;
  data.today.currentTemp = res.condition.temp;
  data.today.currentCondition = res.condition.text;
  data.forecastNext10 = [];
  for (let i = 0; i < res.forecast.length; i++) {
    let dayInfo = {};
    let fcst = res.forecast[i];
    dayInfo.low = fcst.low;
    dayInfo.high = fcst.high;
    let date = convertDate(fcst.date);
    let day = convertDayName(fcst.day);
    dayInfo.date = day + date;
    dayInfo.condition = fcst.text;
    data.forecastNext10.push(dayInfo);
  }
  return data;
}



// export const createInitialWeatherState = (cities) => {
//   let citiesObj = {};
//   for (var i = 0; i < cities.length; i++) {
//     citiesObj[cities[i]['city']] = {};
//     console.log('citiesObj', citiesObj);
//     for (var key in cities[i]) {
//       console.log('temp obj cities i', citiesObj[cities[i]['city']]);
//       console.log('key', key);
//       citiesObj[cities[i]['city']][key] = cities[i][key];
//     }
//   }
//   return citiesObj;
// }
//  