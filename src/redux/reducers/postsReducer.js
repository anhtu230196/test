import {
  LOAD_POSTS_FAILED,
  LOAD_POSTS_START,
  LOAD_POSTS_SUCCESS,
  SORT_POSTS,
} from "../actions/typeAction";
// import { post } from "../../data";
import { sortPosts } from "../utils/helpers";

const initialState = {
  loading: false,
  posts: [],
};
let initialPostList = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_START:
      return { ...state, loading: true };
    case LOAD_POSTS_SUCCESS:
      initialPostList = [...action.payload];
      return { ...state, loading: false, posts: action.payload };
    case LOAD_POSTS_FAILED:
      return { ...state, loading: false };

    case SORT_POSTS:
      // console.log(initialPostList);
      return {
        ...state,
        posts: sortPosts(state.posts, initialPostList, action.payload),
      };

    default:
      return state;
  }
};

export default postReducer;
