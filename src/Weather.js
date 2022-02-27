import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="weather-overview">
          <h1>Oslo</h1>
          <ul>
            <li>February 17th, 20:05</li>
            <li>Cloudy</li>
            <li>Humidity: 4% | Wind: 5km/h</li>
          </ul>
        </div>
      </div>
      <div className="col-6">
        <div className="temperature-details">
          <img
            className="icon"
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
          ></img>
          <span className="main-temperature">5</span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}