import moment from "moment";
import React from "react";
import { Comment } from "semantic-ui-react";

function CommentComponent({ comment }) {
  return (
    <Comment style={{ display: "flex", marginTop: 10 }}>
      <Comment.Avatar width='52px' height='52px' alt='' />
      <Comment.Content style={{ marginLeft: 10 }}>
        <Comment.Author as='a'>{comment.email}</Comment.Author>

        <Comment.Text>{comment.body}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

export default CommentComponent;
