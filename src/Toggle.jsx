/* eslint-disable react/prop-types */
import React from "react";
import weatherContext from "./context/weatherContext";
export default function Toggle({ curr, setcurr }) {
  const { toggle, cities } = React.useContext(weatherContext);

  const handletoggle = (no) => {
    setcurr(no);
    toggle(no);
  };
  return (
    <>
      <div className="pagination">
        {cities
          ?.filter((_, idx) => idx <= Math.ceil(cities.length / 5) - 1)
          ?.map((_, idx) => (
            <span
              key={idx}
              className={curr === idx + 1 && "active"}
              onClick={() => handletoggle(1 + idx)}
            >
              {1 + idx}
            </span>
          ))}
      </div>
    </>
  );
}
