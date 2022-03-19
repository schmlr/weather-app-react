import React from "react";
import axios from "axios";
import "./weather.css";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    
    if(loaded) {
        let apiKey= "f8dd335d654ee5ed88dd8c0c8485e037";
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
    } else {
        return (
        <div className="row">
            <div className="col days">
                <span className="days">Sun</span>
                <div><img src="https://openweathermap.org/img/wn/01d@2x.png" width="30px;" alt="weather"></img></div>
                <div className="forecast-temperature"><strong>17°</strong> | 10°</div>
            </div>
        </div>
        )
    }

};