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
// framer motion
import {motion} from "framer-motion";
import { pageAnimation, pageAnimationMobile, fade, fadeForecast} from "../animation";

const DrawerInfo = () => {
    // getting back the data
    const {forecast} = useSelector((store) => store.weather);
    console.log(forecast);

    let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;

    const checkDevice = () => {
      if (isMobile) {
        return pageAnimationMobile;
      } else {
        return pageAnimation;
      }
    };


  return (
    <StyledContainer exit="exit" variants={checkDevice()} initial="hidden" animate="show">
      <StyledMeteo>
        <div className="title">
          <motion.h1 variants={fade} >Previsioni</motion.h1>
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
              <StyledItem key={key} variants={fadeForecast}>
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