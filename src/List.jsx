import React, { useState } from "react";
import weatherContext from "./context/weatherContext";
import Block from "./Block";
import Search from "./Search";
import Toggle from "./Toggle";
import "./list.css";

export default function Eg() {
  const { currPage, toggle } = React.useContext(weatherContext);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState(1);
  React.useEffect(() => {
    setLoading(false);
    toggle(pageNo, search).then(() => setLoading(true));
  }, [pageNo, search]);

  return (
    <>
      <Search
        value={search}
        onChange={(val) => {
          setSearch(val);
          setPageNo(1);
        }}
      />
      {loading ? currPage.map((el) => <Block key={el.name} {...el} />) : null}
      <Toggle setcurr={setPageNo} curr={pageNo} />
    </>
  );
}
