import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather.js";

import "./weather-app.css";

function App() {
  return (
    <div>
      <div className="container">
      <div className="weather-app">
        <Weather defaultCity="London"/>
      </div>
      <footer>
        This project was coded by Laura Schum, is {}
        <a
          href="https://github.com/schmlr/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub {}
        </a>
        and {}
        <a
          href="https://amazing-galileo-1a2b0f.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netflify
        </a>
        .
      </footer>
    </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);