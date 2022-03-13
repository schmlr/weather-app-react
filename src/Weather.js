import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import "./weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity)
  const [weatherData, setWeatherData] = useState({});
  
  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      name: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    setReady(true);
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

  function getCurrentCoordinates(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "f8dd335d654ee5ed88dd8c0c8485e037";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  function triggerNavigation() {
      navigator.geolocation.getCurrentPosition(getCurrentCoordinates);
  }
  
  if(ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
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
            <div className="col-1">
              <button className="location" title="Current location" onClick={triggerNavigation}>
                <span role="img" aria-label="Current location">
                  📍
                </span>
              </button>
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
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
      <hr/>
      </div>
    );
  } else {
    search();
    return "Loading ..."
  }
}