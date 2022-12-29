import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import css from "./Pagination.module.css";
import { setAnimeData, setLoading } from "../../store/actions/animeCAction";
import { base_url, getQuery, lastQuery } from "../utility/utility";

function Pagination() {
  const dispatch = useDispatch();
  const pagination = useSelector((store) => store.anime.pagination);
  const handleTo = (url) => {
    dispatch(setLoading(true));
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAnimeData(data));
        dispatch(setLoading(false));
      });
  };
  const handleNext = () => {
    if (pagination.current_page !== pagination.last_visible_page) {
      handleTo(
        `${base_url}?${getQuery({
          q: lastQuery,
          page: pagination.current_page + 1,
        })}`
      );
    }
  };
  const handlePrev = () => {
    if (pagination.current_page !== 1) {
      handleTo(
        `${base_url}?${getQuery({
          q: lastQuery,
          page: pagination.current_page - 1,
        })}`
      );
    }
  };
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-sm justify-content-end">
        <li className="page-item">
          <button
            className={`page-link ${
              pagination.current_page === 1 ? css["deactive"] : ""
            }`}
            onClick={handlePrev}
          >
            <span className="d-flex" style={{ transform: "rotate(180deg)" }}>
              <NavigateNextIcon sx={{ fontSize: "1.5em" }} />
            </span>
          </button>
        </li>
        <li className="page-item">
          <button className="page-link">
            {pagination.current_page} of {pagination.last_visible_page}
          </button>
        </li>
        <li className="page-item">
          <button
            className={`page-link ${
              pagination.current_page === pagination.last_visible_page
                ? css["deactive"]
                : ""
            }`}
            onClick={handleNext}
          >
            <span className="d-flex">
              <NavigateNextIcon sx={{ fontSize: "1.5em" }} />
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
