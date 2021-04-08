import axios from 'axios';

// action creator
export const loadLocation = (lat, long, lang) => async (dispatch) => {

  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}&lang=${lang}`;

  const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API}&lang=${lang}`;

  const fetchData = await axios.get(api);
  // console.log(fetchData);
  const fetchDataForecast = await axios.get(forecastApi);
  // console.log(fetchDataForecast.data.list);
  const weatherData = fetchData.data;
  const forecastData = fetchDataForecast.data.list;
  // console.log(forecastData);

  let threeDays = forecastData[0].dt + 172800;
  let forecastMapped = [];

  forecastData.map((item, index)=> {
    if (item.dt <= threeDays ) {
      forecastMapped.push(item);
    }
  });

  console.log(forecastMapped);

  dispatch({
      type: 'FETCH_WEATHER',
      payload: {
        weather: weatherData,
        forecast: forecastMapped
      }
  })
}