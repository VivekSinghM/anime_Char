import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ResultBox from "./resultBox/ResultBox";
import { base_url, getQuery, query } from "../utility/utility";
import { setAnimeData, setLoading } from "../../store/actions/animeCAction";
import Search from "../UI/search/Search";
import css from "./Dashboard.module.css";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    fetch(`${base_url}?${getQuery({})}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAnimeData(data));
        dispatch(setLoading(false));
      });
  });

  return (
    <>
      <div className="" style={{ minWidth: "500px" }}>
        <div
          className={`${css["main-dispaly"]} col p-0 xl position-relative d-flex justify-content-center`}
        >
          <h1
            className="display-5 m-auto w-100"
            style={{
              fontFamily: '"Hachi Maru Pop",cursive',
              color: "azure",
              textAlign: "center",
              position: "absolute",
              top: "5vh",
            }}
          >
            Search Anime Characters
          </h1>
          <Search />
        </div>
        <ResultBox />
      </div>
    </>
  );
}

export default Dashboard;
