import { setAnimeData, setLoading } from "../../../store/actions/animeCAction";

const delay = 500;
const debounce = (fun) => {
  let timeOutSearch;
  return (...prams) => {
    clearTimeout(timeOutSearch);
    timeOutSearch = setTimeout(() => fun(...prams), delay);
  };
};
const search = async (dispatch, url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setAnimeData(data));
      dispatch(setLoading(false));
    });
};

export const activeSearch = debounce(search);
