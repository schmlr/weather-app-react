import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import WeatherForecast from "./WeatherForecast.js";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      name: response.data.name,
      coordinates: response.data.coord,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function search() {
    const apiKey = "f8dd335d654ee5ed88dd8c0c8485e037";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }  

  if(weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search city ..."
                className="form-control"
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 shadow-none"
              />
            </div>
          </div>
        </form>
        <hr/>
      <div className="row">
        <div className="col-6">
          <div className="weather-overview">
            <h1>{weatherData.name}</h1>
            <ul>
              <li><FormattedDate date={weatherData.date}/></li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}% | Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="temperature-details">
            <img
              className="icon"
              src={weatherData.iconUrl}
              alt={weatherData.description}
            ></img>
            <span className="main-temperature">{weatherData.temperature}</span>
            <span className="unit">??C</span>
          </div>
        </div>
      </div>
      <hr/>
      <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    search();
    return "Loading ..."
  }
}