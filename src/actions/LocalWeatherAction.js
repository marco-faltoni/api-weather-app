import axios from 'axios';

// action creator
export const loadLocation = (lat, long, lang) => (dispatch) => {

  let weatherData;
  let forecastData;

  dispatch({
    type: "LOADING"
  })

  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}&lang=${lang}`;

  const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API}&lang=${lang}`;

  axios.get(api).then((data) => {
    weatherData = data.data;
    dispatch({
      type: 'FETCH_WEATHER',
      payload: {
        weather: weatherData,
      }
    })
  }).catch((err) => {
    console.log(`error to api ${err}`);
  });


  axios.get(forecastApi).then((data) => {
    forecastData = data.data.list;
    console.log(forecastData);
    let threeDays = forecastData[0].dt + 162000;
    let forecastMapped = [];

    forecastData.map((item, index)=> {
      if (item.dt <= threeDays ) {
        forecastMapped.push(item);
      }
    });
    dispatch({
      type: 'FETCH_WEATHER',
      payload: {
        weather: weatherData,
        forecast: forecastMapped
      }
    })
  }).catch((err) => {
    console.log(`error to forecast ${err}`);
  });
  // console.log(fetchDataForecast.data.list);
  // console.log(forecastData);

  

  // console.log(forecastMapped);
}

export const loadNoPosition = () => async (dispatch) => {
  dispatch({
    type: "NO_POSITION"
  })
}