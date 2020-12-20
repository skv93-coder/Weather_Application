import React from "react";
import weatherContext from "./context/weatherContext";
export default function Toggle(props) {
  const { toggle } = React.useContext(weatherContext);
  const [curr, setcurr] = React.useState(1);
  const handletoggle = (no) => {
    setcurr(no);
    toggle(no);
  };
  return (
    <>
      <div class="pagination">
        {/* <span>&laquo;</span> */}
        <span
          className={curr === 1 && "active"}
          onClick={() => handletoggle(1)}
        >
          1
        </span>
        <span
          className={curr === 2 && "active"}
          onClick={() => handletoggle(2)}
        >
          2
        </span>
        <span
          className={curr === 3 && "active"}
          onClick={() => handletoggle(3)}
        >
          3
        </span>
        {/* <span>&raquo;</span> */}
      </div>
    </>
  );
}
