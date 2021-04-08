import React, {useEffect, useState} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import {loadLocation} from './actions/LocalWeatherAction';
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Import Pages
import Home from "./pages/Home";
import DrawerInfo from "./pages/DrawerInfo";
import axios from 'axios';

function App() {
  // const [weather, setWeather] = useState(null);
  let long;
  let lat;
  let lang = 'it';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
    })
  }

  const location = useLocation();

  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(loadLocation(lat, long, lang));
  },[dispatch]);

  // getting back the data
  const {weather} = useSelector((store) => store.weather);
  // console.log(weather.length);
  

  return (
    <div className="App">
      {weather.length != 0 && (
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/drawer" exact>
            <DrawerInfo  />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
