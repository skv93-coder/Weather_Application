/* eslint-disable react/prop-types */
import React from "react";
export default function Block(props) {
  return (
    <>
      <div>
        <div className="name flex">
          <div> City : {props.name}</div>
          <div>{props.weather[0].description}</div>
        </div>
        <div className="card flex">
          <div className="tem">
            <span className="currTem">
              {(props.main.temp - 273).toFixed(1)}
              <sup>*</sup>C
            </span>
            <div>
              <span className="currTemMax">
                Curr Max {(props.main.temp_max - 273).toFixed(1)}
                <sup>*</sup>C{" "}
              </span>
            </div>
            <div>
              <span className="currTemMin">
                Curr Min {(props.main.temp_min - 273).toFixed(1)} <sup>*</sup>C
              </span>
            </div>
          </div>
          <div className="practiacl">
            <div className="tem">
              <span className="currTem">
                {(props.main.feels_like - 273).toFixed(1)}
                <sup>*</sup>C
              </span>
            </div>

            <div>
              <span className="pressure">
                Pressure: {props.main.pressure}Pa
              </span>
            </div>
            <div>
              <span className="humidity">{props.main.humidity}% Humidity</span>
            </div>
          </div>
          <div className="air">
            <div className="speed currTem">
              <span>{props.wind.speed} m/s</span>
            </div>
            <div className="visibility">
              <span>Visibility: {props.visibility}</span>
            </div>
          </div>
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
}
