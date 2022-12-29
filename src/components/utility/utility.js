export const base_url = "https://api.jikan.moe/v4/characters";
export const query = {
  limit: 15,
  order_by: "favorites",
  q: "",
  sort: "desc",
};
export let lastQuery;
export const getQuery = ({ q = "", page = 1 }) => {
  let tempQ = { limit: 15, page: page };
  lastQuery = q;
  if (q !== "") {
    tempQ.q = q;
  } else tempQ = { ...query, page: page };
  return buildQuery(tempQ);
};
const buildQuery = (query) => {
  return Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join("&");
};
