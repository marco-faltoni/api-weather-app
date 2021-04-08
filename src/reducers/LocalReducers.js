const initState = {
  weather: [],
  forecast: []
}

const localReducer = (state=initState, action) => {
  switch(action.type){
      case "FETCH_WEATHER":
          return {...state, weather: action.payload.weather, forecast: action.payload.forecast};
      default:
          return {...state};
  }
}

export default localReducer;