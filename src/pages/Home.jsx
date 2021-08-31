import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";
import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/PaginationComp";
import PostList from "../components/Posts/PostList";
import { loadPostsAction } from "../redux/actions/postsAction";

function Home() {
  const { posts, loading } = useSelector((state) => state.post);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsAction());
    let windowWidth = window.innerWidth;
    if (windowWidth < 800) {
      setPostsPerPage(5);
    }
  }, []);

  const setHandlePageChange = (curPage) => {
    setCurrentPage(curPage);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  return loading ? (
    <Dimmer active inverted>
      <Loader size='large'>Loading</Loader>
    </Dimmer>
  ) : (
    <div>
      <Header />
      <PostList posts={currentPosts} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          currentPage={currentPage}
          posts={posts}
          postsPerPage={postsPerPage}
          handlePageChangeProps={setHandlePageChange}
        />
      </div>
    </div>
  );
}

export default Home;
