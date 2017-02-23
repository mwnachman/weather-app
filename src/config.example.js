export default {
  baseUrl: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22',
  midUrl: '%2C%20',
  endUrl: '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
    // The API is Yahoo Weather: developer.yahoo.com/weather
    // Sign in and get your API key and secret
  key: 'KEY_GOES_HERE',
  secret: 'SECRET_GOES_HERE',

  // Ziptastic API -- for getting city corresponding to zip code
  url: 'https://ziptasticapi.com/'
};
