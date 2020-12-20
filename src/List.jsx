import React from "react";
import weatherContext from "./context/weatherContext";
import Block from "./Block";
export default function Eg() {
  const { currPage, toggle } = React.useContext(weatherContext);

  React.useEffect(() => {
    async function first() {
      await toggle(1);
    }
    first();
  }, []);
  return (
    <>
      {currPage ? currPage.map((el) => <Block key={el.name} {...el} />) : null}
    </>
  );
}
