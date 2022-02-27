import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./Search.js";
import Weather from "./Weather.js";
import reportWebVitals from './reportWebVitals';

import "./weather-app.css";

function App() {
  return (
    <div>
      <div className="weather-app">
        <Search />
        <hr />
        <Weather />
        <hr />
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
          href="https://agitated-almeida-fedb1e.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netflify
        </a>
        .
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);