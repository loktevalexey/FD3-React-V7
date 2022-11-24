import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { weatherLoad } from "../redux/weatherLoad.js";

export const WeatherDisplay = () => {

  const dispatch = useDispatch();

  const weather = useSelector( state => state.weather ); 

  function load() {
    dispatch( weatherLoad ); // looks like a regular dispatch of a regular action
  };

  return (
    <>
      { (weather.dataLoadState===0) && "no data" }
      { (weather.dataLoadState===1) && "loading..." }
      { (weather.dataLoadState===2) && "in 2000 is: "+weather.data.data["2000"] }
      { (weather.dataLoadState===3) && "error: "+weather.dataLoadError }
      <br/>
      <input type='button' value='load data' onClick={load} />
      
    </>
);

}
