import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import css from "./Item.module.css";

function Item(props) {
  return (
    <li
      className="row mr-auto ml-auto mb-2 border border-white"
      style={{ backgroundColor: "rgb(0 0 0 / 86%)" }}
    >
      <div className="col">
        <div className="row">
          <div
            className="col mr-2 p-2 d-flex justify-content-center"
            style={{ maxWidth: "70px" }}
          >
            <img src={props.img} alt="lol" style={{ maxHeight: "70px" }}></img>
          </div>
          <div
            className={`col p-0 pl-2 ${css["result"]}`}
            style={{ flexGrow: 1, minWidth: "300px" }}
          >
            <h4 className="m-0 mt-2"> {props.name} </h4>
            <p className="mt-1">{props.nicknames}</p>
          </div>
        </div>
      </div>
      <div className="col-2 p-0 d-flex" style={{ minWidth: "150px" }}>
        <div className="col p-0 pt-2">
          <div className="d-flex align-items-center">
            <span className="pr-1" style={{ lineHeight: 0, color: "#dc3545" }}>
              <FavoriteIcon />
            </span>
            <span style={{ fontSize: ".9em" }}> {props.fav}</span>
          </div>
        </div>
        <div
          className="col border-left d-flex align-items-center justify-content-center"
          style={{ height: "100%", maxWidth: "70px" }}
        >
          <a
            className={`${css["page-link"]}`}
            href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="d-flex" style={{ transform: "rotate(180deg)" }}>
              <ArrowBackIcon />
            </span>
          </a>
        </div>
      </div>
    </li>
  );
}

export default Item;
