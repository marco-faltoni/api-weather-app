const initState = {
  weather: [],
  forecast: [],
  isLoading: true,
  noPosition: false
}

const localReducer = (state=initState, action) => {
  switch(action.type){
      case "FETCH_WEATHER":
        return {...state, weather: action.payload.weather, forecast: action.payload.forecast, isLoading: false};
      case "LOADING":
        return{
          ...state,
          isLoading: true,
        }
      case "NO_POSITION":
        return{
          ...state,
          isLoading: false,
          noPosition: true,
        }
      default:
          return {...state};
  }
}

export default localReducer;