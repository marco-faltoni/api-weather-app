import React, {useEffect, useState} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import {loadLocation, loadNoPosition} from './actions/LocalWeatherAction';
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Import Pages
import Home from "./pages/Home";
import DrawerInfo from "./pages/DrawerInfo";
import Loader from "./components/Loader";
import axios from 'axios';

function App() {

  const location = useLocation();

  const dispatch = useDispatch();
  
  useEffect(()=> {
    let long;
    let lat;
    let lang = 'it';

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(navigator.geolocation.getCurrentPosition);
        long = position.coords.longitude;
        lat = position.coords.latitude;
        dispatch(loadLocation(lat, long, lang));
      }, err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        dispatch(loadNoPosition());
      })
    }
  },[dispatch]);

  // getting back the data
  const {weather, isLoading, noPosition} = useSelector((store) => store.weather);
  // console.log(weather, weather.length);
  

  return (
    <div className="App">
      {weather.length !== 0 && (
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/drawer" exact>
            <DrawerInfo  />
          </Route>
        </Switch>
      )}
      {isLoading && (
        <Loader />
      )}
      {noPosition && (
        <div className="user-no-position">
          <h3>Permetti all'applicazione di rilevare la tua posizione! Ricarica la pagina.</h3>
        </div>
      )}
    </div>
  );
}

export default App;
