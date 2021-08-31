import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export default rootReducer;
