import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { useQuery } from "@apollo/client";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";

const Home = () => {
  const { user } = useContext(AuthContext);
  // const { loading, data, error } = useQuery(FETCH_POSTS_QUERY);
  const { loading, error, data: { getPosts: posts } = {} } = useQuery(
    FETCH_POSTS_QUERY
  );

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading Posts</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: "20px" }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>

      {/* <Grid.Row className="page-title">
        <Grid.Column>
          <h1>Recent posts</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading Posts</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row> */}
    </Grid>
  );
};

export default Home;
