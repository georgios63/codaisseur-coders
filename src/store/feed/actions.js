import axios from "axios";
import { API_URL } from "../../config";

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

  const offset = getState().feed.posts.length;

  const response = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);

  const posts = response.data.rows;
  dispatch(postsFetched(posts));
}
