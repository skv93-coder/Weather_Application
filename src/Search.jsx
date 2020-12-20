import React from "react";
import weatherContext from "./context/weatherContext";
export default function Search() {
  const [value, setvalue] = React.useState("");
  const { handleSearch, onSorting } = React.useContext(weatherContext);
  const onSearch = (Text) => {
    setvalue(Text);
    if (Text) {
      handleSearch(Text);
    }
  };
  return (
    <>
      <div className="search">
        <input
          type="text"
          value={value}
          onChange={(Event) => onSearch(Event.target.value)}
          placeholder="Search"
        />
      </div>

      <div className="AtoZ">
        <button id="btn" onClick={onSorting} type="radio">
          A-to-Z
        </button>
      </div>
    </>
  );
}
