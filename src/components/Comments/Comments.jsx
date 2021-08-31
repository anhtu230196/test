import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import Comment from "./Comment/Comment";

function Comments({ comments }) {
  const [visible, setVisible] = useState(4);

  const loadMoreComments = () => {
    setVisible((prev) => prev + 4);
  };

  if (!comments) return <p>Have no any comments on this post...</p>;
  return (
    <div>
      {comments.slice(0, visible).map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      {comments.length > visible && (
        <Button
          color='orange'
          style={{ margin: "10px auto", display: "block" }}
          onClick={loadMoreComments}>
          See More ({comments.length - visible})
        </Button>
      )}
    </div>
  );
}

export default Comments;
