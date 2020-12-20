import React from "react";
import WeatherContext from "./weatherContext";
import reducer from "./weatherReducer";
import { CURR_CITIES, SEARCH, CLEAR_SEARCH, SORT } from "./types";
import axios from "axios";
export default function WeatherSate(props) {
  const intial = {
    search: null,
    onCurrPage: { currPage: 1, data: {} },
    currPage: null,
    cities: [
      { name: "London", data: null },
      { name: "berlin", data: null },
      { name: "delhi", data: null },
      { name: "mumbai", data: null },
      { name: "seoul", data: null },
      { name: "tokyo", data: null },
      { name: "paris", data: null },
      { name: "amritsar", data: null },
      { name: "patna", data: null },
      { name: "new york", data: null },
      { name: "kabul", data: null },
      { name: "kyoto", data: null },
      { name: "mohali", data: null },
      { name: "brasilia", data: null },
      { name: "chandigarh", data: null },
    ],
  };

  const [state, dispatch] = React.useReducer(reducer, intial);

  const toggle = async (page) => {
    const startPage = (page - 1) * 5;
    const onPage = [];
    let city = state.cities[startPage].name;
    let response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=896a36af566187c2261cfa42f2582ad2`
    );
    let city2 = state.cities[startPage + 1].name;
    let response2 = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=896a36af566187c2261cfa42f2582ad2`
    );
    let city3 = state.cities[startPage + 2].name;
    let response3 = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=896a36af566187c2261cfa42f2582ad2`
    );
    let city4 = state.cities[startPage + 3].name;
    let response4 = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city4}&appid=896a36af566187c2261cfa42f2582ad2`
    );
    let city5 = state.cities[startPage + 4].name;
    let response5 = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city5}&appid=896a36af566187c2261cfa42f2582ad2`
    );
    onPage.push(
      response.data,
      response2.data,
      response3.data,
      response4.data,
      response5.data
    );

    dispatch({
      type: CURR_CITIES,
      payload: onPage,
    });
  };
  const handleSearch = async (text) => {
    const onPage = [];
    let startPage = 0;

    let search = [];
    for (let i = 0; i < state.cities.length; i++) {
      if (state.cities[i].name.includes(text)) {
        search.push({ name: state.cities[i].name, data: null });
      }
    }
    console.log(search);
    const length = search.length;
    let response = "";
    let response2 = "";
    let response3 = "";
    let response4 = "";
    let response5 = "";

    if (length > 0) {
      let city = search[startPage].name;
      response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=896a36af566187c2261cfa42f2582ad2`
      );
      onPage.push(response.data);
    }
    if (length > 1) {
      let city2 = search[startPage + 1].name;
      response2 = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=896a36af566187c2261cfa42f2582ad2`
      );
      onPage.push(response2.data);
    }
    if (length > 2) {
      let city3 = search[startPage + 2].name;
      response3 = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=896a36af566187c2261cfa42f2582ad2`
      );
      onPage.push(response3.data);
    }
    if (length > 3) {
      let city4 = search[startPage + 3].name;
      response4 = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city4}&appid=896a36af566187c2261cfa42f2582ad2`
      );
      onPage.push(response4.data);
    }
    if (length > 4) {
      let city5 = search[startPage + 4].name;
      response5 = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city5}&appid=896a36af566187c2261cfa42f2582ad2`
      );
      onPage.push(response5.data);
    }

    onPage["currPage"] = [...onPage];
    onPage["search"] = search;

    dispatch({
      type: SEARCH,
      payload: onPage,
    });
  };
  const clearSearch = () => {
    toggle(1);
    dispatch({
      type: CLEAR_SEARCH,
    });
  };
  const onSorting = () => {
    let sortOrder = [];
    let sort = [];
    for (let i = 0; i < state.currPage.length; i++) {
      sort[i] = state.currPage[i].name;
    }
    sort.sort();
    let tem = {};
    for (let i = 0; i < state.currPage.length; i++) {
      tem = { ...tem, [sort[i]]: i };
    }
    for (let i = 0; i < sort.length; i++) {
      sortOrder[tem[state.currPage[i].name]] = state.currPage[i];
    }

    console.log(sortOrder);
    dispatch({
      type: SORT,
      payload: sortOrder,
    });
  };
  return (
    <WeatherContext.Provider
      value={{
        cities: state.cities,
        toggle: toggle,
        currPage: state.currPage,
        onCurrPage: state.onCurrPage,
        handleSearch: handleSearch,
        clearSearch: clearSearch,
        onSorting: onSorting,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
