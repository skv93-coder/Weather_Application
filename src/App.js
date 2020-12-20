import React from "react";
import "./App.css";
import Eg from "./List";
import WeatherSate from "./context/WeatherState";

import Toggle from "./Toggle";
import Search from "./Search";
export default function App() {
  return (
    <WeatherSate>
      <div className="App">
        <Search />
        <Eg />

        <Toggle />
      </div>
    </WeatherSate>
  );
}
