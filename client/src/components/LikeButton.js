import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { Icon, Label, Button, Popup } from "semantic-ui-react";

const LikeButton = ({ user, post: { id, likes, likeCount } }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id },
  });

  const likeButton = user ? (
    liked ? (
      <Button color="teal">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="teal" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="teal" basic>
      <Icon name="heart" />
    </Button>
  );

  return (
    <div>
      {/* <Popup> can be extracted inorder to conform with DRY principles */}
      <Popup
        content={liked ? "unlike post" : "like post"}
        inverted
        trigger={
          <Button as="div" labelPosition="right" onClick={likePost}>
            {likeButton}
            <Label as="a" basic color="teal" pointing="left">
              {likeCount}
            </Label>
          </Button>
        }
      />
    </div>
  );
};

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export default LikeButton;
