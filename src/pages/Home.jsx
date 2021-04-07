import React from "react";
// import routing
import { Link } from "react-router-dom";
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const Home = (props) => {
  const { weather } = props;
  const wheatherIcon = weather.weather[0].id.toString();
  const wheatherCondition = weather.weather[0].description;
  console.log( weather);
  const todayFormat = moment().format('DD-MM-YYYY');
  const localCity = weather.name;

  let unix_timestamp = weather.dt;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  let hours = date.getHours();
  // Minutes part from the timestamp
  let minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  let seconds = "0" + date.getSeconds();

  
  // Will display time in 10:30:23 format
  let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  console.log(formattedTime);

  // normalizzo il voto arrotondandolo ad un numero intero o alla sua meta(es. 3, 3.5 o 4)
  const temp = Math.round(weather.main.temp / 0.5) * 0.5;
  console.log(temp);
  // console.log(rating);

  // salvo in una variabile il voto normalizzato di prima arrontodandolo al minimo
  const tempNormalized = Math.floor(temp);
  console.log(tempNormalized);



  return (
    <div>
      <div className="container">
        <WeatherIcon name="owm" iconId={wheatherIcon} />
        <h1>{tempNormalized}° C</h1>
        <h1>Oggi a {localCity} c'è {wheatherCondition} </h1>
        <h4>Ultimo Aggiornamento {todayFormat}, {formattedTime} </h4>
        <button>
          <Link to="/drawer">
            todrawer
          </Link>
        </button>
      </div>
    </div>
  );
};


export default Home;