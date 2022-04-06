import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="col-12 Forecast">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row info-grid">
              <div className="col-3">
                Low:<div id>15°C</div>
              </div>
              <div className="col-3">
                High:<div>20°C</div>
              </div>
              <div className="col-3">
                Wind: <div>2mps</div>
              </div>
              <div className="col-3">
                Humidity:<div>20%</div>
              </div>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                  <input
                    type="radio"
                    name="options"
                    id="cel"
                    autocomplete="off"
                    checked
                  />
                  °C
                </label>
                <label className="btn btn-secondary">
                  <input type="radio" name="options" autocomplete="off" />
                  °F
                </label>
              </div>
            </div>
            <div className="row week-grid" id="forecast"></div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <div className="row info-grid">
              <div className="col">
                Mon 10°C{" "}
                <span role="img" aria-label="icon">
                  ⛅
                </span>{" "}
              </div>
              <div className="col">
                Tue 10°C{" "}
                <span role="img" aria-label="icon">
                  ⛅
                </span>{" "}
              </div>
              <div className="col">
                Wed 10°C{" "}
                <span role="img" aria-label="icon">
                  ⛅
                </span>{" "}
              </div>
              <div className="col">
                Thurs 10°C{" "}
                <span role="img" aria-label="icon">
                  ⛅
                </span>{" "}
              </div>
              <div className="col">
                Fri 10°C{" "}
                <span role="img" aria-label="icon">
                  ⛅
                </span>{" "}
              </div>
              <div className="col">
                Sat 10°C{" "}
                <span role="img" aria-label="icon">
                  ⛅
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
