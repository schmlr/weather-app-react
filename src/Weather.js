import React from "react";
import axios from "axios";

export default function Weather() {
    let apiKey = "f8dd335d654ee5ed88dd8c0c8485e037";
    let city = "Berlin";
    let units = "metric"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    function showTemperature(response) {
        let temperature = response.data.main.temp;
        alert(`The weather in ${city} is ${temperature}`);
        }

    axios.get(url).then(showTemperature)
}