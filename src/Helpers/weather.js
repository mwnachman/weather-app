export const createInitialWeatherState = (cities) => {
  let citiesArray = [];
  if (localStorage.getItem('city') === null 
      && localStorage.getItem('state') === null) {
    for (let i = 0; i < cities.length; i++) {
      let tempObj = {};
        for (let key in cities[i]) {
          tempObj[key] = cities[i][key];
        }
      citiesArray.push(tempObj);
    }
  } else {
    let city = localStorage.getItem('city'); 
    let state = localStorage.getItem('state');
    citiesArray[0] = {};
    citiesArray[0]['city'] = city;
    citiesArray[0]['state'] = state;
    for (let i = citiesArray.length; i < cities.length; i++) {
      if (cities[i]['city'] !== citiesArray[0]['city']
          && cities[i]['state'] !== citiesArray[0]['state']) {
        let tempObj = {};
        for (let key in cities[i]) {
            tempObj[key] = cities[i][key];
          }
        citiesArray.push(tempObj);
      }
    }
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
    return 'Friday, ';
  } else if ( day === 'Sat' ) {
    return 'Saturday, ';
  } else if ( day === 'Sun' ) {
    return 'Sunday, ';
  }
}

export const convertDate = (dateToConvert) => {
  let formattedDate = [];
  let date = dateToConvert.split(' ');
  var ordinal = [];
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
      ordinal = date[0].split('');
      ordinal[2] = 'th,';
      ordinal = ordinal.join('');
    }
  }
  formattedDate.push(date[1]);
  formattedDate.push(ordinal);
  formattedDate.push(date[2]);
  return formattedDate.join(' ');
}

export const convertDateWithoutYear = (dateToConvert) => {
  let newDate = convertDate(dateToConvert);
  let dateWithoutYearArray = newDate.split(',');
  return dateWithoutYearArray[0];
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
  data.today.currentConditionPicture = res.condition.text.split(' ').join('');
  data.forecastNext10 = [];
  for (let i = 0; i < res.forecast.length; i++) {
    let dayInfo = {};
    let fcst = res.forecast[i];
    dayInfo.low = fcst.low;
    dayInfo.high = fcst.high;
    let date = convertDateWithoutYear(fcst.date);
    let day = convertDayName(fcst.day);
    dayInfo.date = day + date;
    dayInfo.condition = fcst.text;
    dayInfo.conditionPicture = dayInfo.condition.split(' ').join('');
    data.forecastNext10.push(dayInfo);
  }
  return data;
}

export const parseCityName = (city) => {
  let cityArray = city.split(',');
  let cityName = cityArray[0];
  let state = cityArray[1];
  let cityWords = cityName.toLowerCase().split(' ');
  for (let i = 0; i < cityWords.length; i++) {
    let cityWordLetterArray = cityWords[i].split('');
    cityWordLetterArray[0] = cityWordLetterArray[0].toUpperCase();
    cityWords[i] = cityWordLetterArray.join('');
  }
  city = cityWords.join(' ');
  let stateName = state.split('').slice(1).join('').toUpperCase();
  return [city, stateName];
}
