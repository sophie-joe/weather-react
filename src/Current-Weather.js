import React from "react";
import "./Current-Weather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <h1>
        <span>New York,</span>
        <span> US</span>
      </h1>

      <ul>
        <li>
          <p>
            Last updated at: <span> Saturday 05:00</span>
          </p>
        </li>

        <li>
          <p>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="icon"
              width="100"
            />{" "}
          </p>
        </li>
        <li>
          <h2>Light rain</h2>
        </li>
        <li>
          <h1>10°C</h1>
        </li>
      </ul>
    </div>
  );
}
