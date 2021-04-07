import React, {useEffect, useState} from "react";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Import Pages
import Home from "./pages/Home";
import DrawerInfo from "./pages/DrawerInfo";
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);

  const location = useLocation();
  
  useEffect(()=> {
    let long;
    let lat;
    let lang = 'it';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}&lang=${lang}`;

        axios.get(api).then((data)=>{
          console.log(data);
          console.log(data.data);
          setWeather(data.data);
        }).catch((err) => {
          console.log(err);
        })
      })
      
    }
  },[]);

  return (
    <div className="App">
      {weather && (
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home weather={weather} setWeather={setWeather} />
          </Route>
          <Route path="/drawer" exact>
            <DrawerInfo weather={weather} setWeather={setWeather} />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
