import React from "react";
// Redux
import { useSelector} from 'react-redux';
import {
  StyledContainer,
  StyledMeteo,
  StyledBack,
  StyledItems,
  StyledItem
} from "../styles/DrawerInfo.styles";
import { Link } from "react-router-dom";
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const DrawerInfo = () => {
    // getting back the data
    const {forecast} = useSelector((store) => store.weather);
    console.log(forecast);


  return (
    <StyledContainer>
      <StyledMeteo>
        <div className="title">
          <h1>Previsioni</h1>
        </div>
        <StyledItems>
          {forecast.map((item, key) => {
            let date = new Date(item.dt * 1000);
            let wheatherIcon = item.weather[0].id.toString();
            let wheatherCondition = item.weather[0].description;
            let dayWrapper = moment(date).format('DD-MM');
            let formattedDate = dayWrapper.replace("-", "/");
        
            // Hours part from the timestamp
            let hours = date.getHours();
            // Minutes part from the timestamp
            let minutes = "0" + date.getMinutes();
            // Will display time in 10:30 format
            let formattedTime = hours + ':' + minutes.substr(-2);
            // console.log(formattedDate, formattedTime);
            return (
              <StyledItem key={key}>
                <div className="icon">
                  <WeatherIcon name="owm" iconId={wheatherIcon} flip="horizontal"/>
                </div>
                <div className="text">
                  <div className="time">
                    <h4>{formattedDate} alle {formattedTime}</h4>
                  </div>
                  <div className="desc">
                    <h4>{wheatherCondition}</h4>
                  </div>
                </div>
              </StyledItem>
            );
          })}
        </StyledItems>
        <StyledBack className="go-back">
          <Link to="/">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </Link>
        </StyledBack>
      </StyledMeteo>
    </StyledContainer>
  );
};


export default DrawerInfo;