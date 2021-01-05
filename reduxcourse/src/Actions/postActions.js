import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => {
        dispatch({
        type: FETCH_POSTS,
        payload: res.data,
        });
  });
};