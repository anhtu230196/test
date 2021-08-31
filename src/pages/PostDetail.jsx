import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container, Icon, Header, Dimmer, Loader } from "semantic-ui-react";
import Comments from "../components/Comments/Comments";
import HeaderC from "../components/Header/Header";

function PostDetail() {
  const { id } = useParams();
  //   const {} = useSelector(state =>  state.)
  const [comments, setComments] = useState([]);
  const [postInfo, setPostInfo] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const commentsData = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const info = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const res = await Promise.all([commentsData, info]);
    setComments(res[0].data);
    setPostInfo({ title: res[1].data.title, body: res[1].data.body });
    setLoading(false);
  }, [id]);

  return (
    <>
      {loading && (
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
      )}
      <HeaderC />
      <Container style={{ marginTop: 20 }}>
        <h2>{postInfo.title}</h2>
        <Icon name='clock outline' size='large' />
        <span>{postInfo.body}</span>
      </Container>
      <hr />
      <Container></Container>
      <hr />
      <Container>
        <Header as='h3' dividing>
          Comments ({comments ? comments.length : 0})
        </Header>
        <Comments comments={comments} />
      </Container>
    </>
  );
}

export default PostDetail;
