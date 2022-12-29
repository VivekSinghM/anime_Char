import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import css from "./Search.module.css";
import { activeSearch } from "./activeSearch";
import { useDispatch } from "react-redux";
import { base_url, getQuery } from "../../utility/utility";
import { setLoading } from "../../../store/actions/animeCAction";

function Search() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e) => {
    dispatch(setLoading(true));
    const temp = e.target.value;
    setName(temp);
    activeSearch(dispatch, `${base_url}?${getQuery({ q: temp })}`);
  };
  return (
    <div className={"input-group mb-3 " + css["search-bar"]}>
      <div className="input-group-prepend">
        <span className="input-group-text border-right-0" id="basic-addon1">
          <SearchIcon />
        </span>
      </div>
      <input
        className="form-control border-left-0"
        type="text"
        placeholder="Search"
        value={name}
        onChange={handleInput}
      />
    </div>
  );
}

export default Search;
