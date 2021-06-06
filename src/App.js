/* eslint-disable react/no-children-prop */
import React from "react";
import "./App.css";

import Eg from "./List";
import WeatherSate from "./context/WeatherState";

export default function App() {
  return (
    <WeatherSate>
      <div className="App">
        <Eg />
      </div>
    </WeatherSate>
  );
}
