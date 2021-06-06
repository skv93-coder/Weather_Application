/* eslint-disable react/prop-types */
import React, { useState } from "react";

import weatherContext from "./context/weatherContext";
export default function Search({ value, onChange }) {
  const { onSorting, addCity } = React.useContext(weatherContext);
  const [addCityModal, setAddCityModal] = useState(false);
  const [city, setCity] = useState("");

  const onSearch = (Text) => {
    if (Text) {
      // handleSearch(Text);
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={value}
          onChange={(Event) => {
            onChange(Event.target.value);
            onSearch(Event.target.value);
          }}
          placeholder="Search"
          className="searchInput"
        />
        <button
          onClick={() => {
            setAddCityModal(true);
          }}
          className="add-cities"
          style={{ cursor: "pointer", height: "27px" }}
        >
          Add cities
        </button>
      </div>

      <div className="AtoZ">
        <button id="btn" onClick={onSorting} type="radio">
          A-to-Z
        </button>
      </div>
      <div
        style={{
          display: `${!addCityModal ? "none" : "flex"}`,
          position: "fixed",
          top: "0vh",
          left: "0vw",
          height: "100%",
          width: "100%",

          alignItems: "center",
          justifyContent: "center",
          background: "rgb(12 11 11 / 40%)",
        }}
      >
        <div
          style={{
            margin: "20px",
            backgroundColor: "white",
            textAlign: "right",
          }}
        >
          <div style={{ paddingTop: "8px", paddingRight: "8px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 64 64"
              style={{ height: "16px", cursor: "pointer" }}
              onClick={() => {
                setAddCityModal(false);
              }}
            >
              <line
                x1="9.37"
                x2="54.63"
                y1="9.37"
                y2="54.63"
                fill="none"
                stroke="#010101"
                strokeMiterlimit="10"
                strokeWidth="4"
              />
              <line
                x1="9.37"
                x2="54.63"
                y1="54.63"
                y2="9.37"
                fill="none"
                stroke="#010101"
                strokeMiterlimit="10"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div style={{ padding: "14px 16px 16px 15px" }}>
            <input
              value={city}
              onChange={({ target }) => {
                setCity(target.value);
              }}
              style={{
                height: "25px",
                width: "200px",
                borderRadius: "10px",
                outline: "none",
                marginBottom: "12px",
              }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => {
                  addCity(city);
                  setCity("");
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
