import React from "react";
import { useSelector } from "react-redux";

import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import Item from "../item/Item";
import Pagination from '../../UI/Pagination'
import css from "./ResultBox.module.css";
import Loading from "../../UI/loading/Loading";

function ResultBox() {
  const animeStore = useSelector((store) => store.anime);
  const animeData = animeStore.data;
  let result;

  if (animeData.length !== 0) {
    result = animeData.map((data, key) => {
      let nicknames = data.nicknames.map((name, key) => (
        <span key={key} className="badge badge-pill badge-light mr-1">
          {name}
        </span>
      ));
      return (
        <Item
          img={data.images.jpg.image_url}
          name={data.name}
          fav={data.favorites}
          nicknames={nicknames}
          url={data.url}
          key={key}
        />
      );
    });
  } else {
    result = (
      <div className="d-flex justify-content-center">
        <span>
          {" "}
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: "5em" }} />
        </span>
        <div className="display-4 text-light text-center"> no data Found</div>
      </div>
    );
  }
  return (
    <div className={`${css["result-box"]} p-2`}>
      {!!animeStore.loading?<Loading/>:<div className="col">
        {!!animeStore.pagination && <Pagination />}
        <div className={`${css["results"]}`}>
          <ul
            className="p-0"
            style={{
              listStyleType: "none",
              color: "azure",
              minWidth: "450px",
            }}
          >
            {result}
          </ul>
        </div>
      </div>}
    </div>
  );
}

export default ResultBox;
