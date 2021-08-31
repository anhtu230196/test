import axios from "axios";
import {
  LOAD_POSTS_FAILED,
  LOAD_POSTS_START,
  LOAD_POSTS_SUCCESS,
  SORT_POSTS,
} from "./typeAction";

const loadPostsStart = () => ({ type: LOAD_POSTS_START });

const loadPostsFailed = () => ({ type: LOAD_POSTS_FAILED });

const loadPostsSuccess = (posts) => ({
  type: LOAD_POSTS_SUCCESS,
  payload: posts,
});

export const loadPostsAction = () => (dispatch) => {
  dispatch(loadPostsStart());
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      dispatch(loadPostsSuccess(res.data));
    })
    .catch((err) => dispatch(loadPostsFailed()));
};
