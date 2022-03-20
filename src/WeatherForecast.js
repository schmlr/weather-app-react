import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay.js";
import "./weather.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
    
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if(loaded) {
    return (
      <div>
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col days" key={index}>
                <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey= "f8dd335d654ee5ed88dd8c0c8485e037";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return null
}
}