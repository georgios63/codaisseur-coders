import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(posts) {
  return {
    type: "feed/postsFetched",
    payload: posts,
  };
}

export async function fetchPosts(dispatch, getState) {
  dispatch(startLoading());
  const response = await axios.get(`${API_URL}/posts`);
  console.log("response", response);

  const posts = response.data.rows;
  dispatch(postsFetched(posts));
}
