import React from "react";
import {
  StyledLoader
} from "../styles/Loader.styles";
// Redux
import {useSelector} from 'react-redux';

const Loader = () => {
  // getting back the data
  const {forecast} = useSelector((store) => store.weather);
  console.log(forecast);


  return (
    <StyledLoader>
      <div className="loader"></div>
    </StyledLoader>
  );
};


export default Loader;