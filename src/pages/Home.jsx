import React from "react";
// import search
import AlgoliaPlaces from 'algolia-places-react';
// Redux
import { useSelector, useDispatch} from 'react-redux';
// actions
import {loadLocation} from '../actions/LocalWeatherAction';
import {
  StyledContainer,
  StyledMeteo,
  StyledButton
} from "../styles/Home.styles";
// import routing
import { Link } from "react-router-dom";
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
// framer motion
import {motion} from "framer-motion";
import { pageAnimation, pageAnimationMobile, fade } from "../animation";

const Home = () => {
  // getting back the data from redux
  const {weather} = useSelector((store) => store.weather);
  const dispatch = useDispatch();
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
  // console.log(moment().add(3, 'days').format('L'));
  // Will display time in 10:30:23 format
  let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  // normalizzo il voto arrotondandolo ad un numero intero o alla sua meta(es. 3, 3.5 o 4)
  const temp = Math.round(weather.main.temp / 0.5) * 0.5;
  // salvo in una variabile il voto normalizzato di prima arrontodandolo al minimo
  const tempNormalized = Math.floor(temp);

  let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;

  const checkDevice = () => {
    if (isMobile) {
      return pageAnimationMobile;
    } else {
      return pageAnimation;
    }
  };

  const onChangeSearch = (query,rawAnswer,suggestion) => {
    console.log(suggestion.latlng.lat, suggestion.latlng.lng );
    dispatch(loadLocation(suggestion.latlng.lat, suggestion.latlng.lng, 'it'));
  };

  const algoliaOptions = {
    appId: `${process.env.REACT_APP_ALGOLIA_API_ID}`,
    apiKey: `${process.env.REACT_APP_ALGOLIA_API_KEY}`,
    language: 'it',
    countries: ['it'],
    type: 'city',
    // Other options from https://community.algolia.com/places/documentation.html#options
  };

  return (
    <StyledContainer variants={checkDevice()} initial="hidden" animate="show" exit="exit" >
      <StyledButton>
          <Link variants={fade} to="/drawer">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </Link>
      </StyledButton>
      <StyledMeteo>
        <motion.div variants={fade} className="icons-and-temp">
          <WeatherIcon name="owm" iconId={wheatherIcon} flip="horizontal" />
          <h1>{tempNormalized}°C</h1>
        </motion.div>
        <motion.h1 variants={fade} className="local">Oggi a <span>{localCity}</span> c'è <span>{wheatherCondition}</span></motion.h1>
        <motion.h4 variants={fade}>Ultimo Aggiornamento {todayFormat}, {formattedTime} </motion.h4>
        <motion.h4 variants={fade}>Powered by Synesthesia</motion.h4>
        <motion.div variants={fade}>
          <AlgoliaPlaces
            placeholder='Scrivi la città qui'

            options={algoliaOptions}

            onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => 
              onChangeSearch(query,rawAnswer,suggestion)}

            // onSuggestions={({ rawAnswer, query, suggestions }) => 
            //   console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}

            // onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
            //   console.log('Fired when arrows keys are used to navigate suggestions.')}

            // onClear={() => 
            //   console.log('Fired when the input is cleared.')}

            // onLimit={({ message }) => 
            //   console.log('Fired when you reached your current rate limit.')}

            // onError={({ message }) => 
            //   console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
          />
        </motion.div>
      </StyledMeteo>
      
    </StyledContainer>
  );
};


export default Home;