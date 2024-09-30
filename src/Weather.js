import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <header>
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control enter-city"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 search-city"
              />
            </div>
          </div>
        </form>
      </header>
      <div className="h1-h2">
        <h1 className="city-name">New York</h1>
        <h2 className="weather-description">cloudy</h2>
      </div>
      <div className="date-current-weather">
        <div className="time"> Sunday, 02:30 p.m.</div>
        <div>
          <div className="weather-info">
            <div className="icon">☁️</div>
            <div className="temperature">17</div>
            <div className="unit">℃</div>
          </div>
        </div>
      </div>
      <ul className="extra-info">
        <li>
          Real feel: <span className="real-feel">15</span>
        </li>
        <li>
          Humidity: <span className="humidity">74</span>%
        </li>
        <li>
          Wind: <span className="wind-speed">21</span>km/h
        </li>
      </ul>
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://github.com/PopovMaja"
            target="_blank"
            rel="noreferrer"
          >
            Maja Popov
          </a>{" "}
          and is open sorced on{" "}
          <a
            href="https://github.com/PopovMaja/week-4-weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weather-app-react-week-4-homework.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
