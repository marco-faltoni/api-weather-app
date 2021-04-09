import React from "react";
// Redux
import { useSelector} from 'react-redux';
import {
  StyledContainer,
  StyledMeteo,
  StyledButton
} from "../styles/Home.styles";
// import routing
import { Link } from "react-router-dom";
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const Home = () => {
  // getting back the data
  const {weather} = useSelector((store) => store.weather);
  console.log(weather);
  // icon
  const wheatherIcon = weather.weather[0].id.toString();
  // weather desc
  const wheatherCondition = weather.weather[0].description;
  // getting date
  const todayFormat = moment().format('DD-MM-YYYY');
  // getting city
  const localCity = weather.name;

  // get timestamp
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

  console.log(moment().add(3, 'days').format('L'));

  // moment().add(3, 'hours').format('L')
  // Will display time in 10:30:23 format
  let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  // console.log(formattedTime);

  // normalizzo il voto arrotondandolo ad un numero intero o alla sua meta(es. 3, 3.5 o 4)
  const temp = Math.round(weather.main.temp / 0.5) * 0.5;
  // console.log(temp);

  // salvo in una variabile il voto normalizzato di prima arrontodandolo al minimo
  const tempNormalized = Math.floor(temp);
  // console.log(tempNormalized);



  return (
    <StyledContainer>
      <StyledButton>
          <Link to="/drawer">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </Link>
      </StyledButton>
      <StyledMeteo>
        <div className="icons-and-temp">
          <WeatherIcon name="owm" iconId={wheatherIcon} flip="horizontal" />
          <h1>{tempNormalized}°C</h1>
        </div>
        <h1 className="local">Oggi a <span>{localCity}</span> c'è <span>{wheatherCondition}</span></h1>
        <h4>Ultimo Aggiornamento {todayFormat}, {formattedTime} </h4>
        <h4>Powered by Synesthesia</h4>
      </StyledMeteo>
    </StyledContainer>
  );
};


export default Home;