import moment from "moment";
import React from "react";
import { useHistory } from "react-router";
import "./Post.css";

function Post({ post: { title, id, body } }) {
  const history = useHistory();
  // console.log(post);
  return (
    <div className='post' onClick={() => history.push(`/${id}`)}>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

export default Post;
