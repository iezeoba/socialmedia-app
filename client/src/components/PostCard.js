import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Label, Image, Button, Popup } from "semantic-ui-react";
import moment from "moment";
import { AuthContext } from "../context/Auth";
import LikeButton from "./LikeButton";
import DeleteButton from "../pages/DeleteButton";

//below we destructure the props and assign them to a key 'post'//
const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  const { user } = useContext(AuthContext);
  const likePost = () => {
    console.log("Likee Postee!!");
  };

  // const commentOnPost = () => { //not needed anymore//
  //   console.log("Comment On Postee!!");
  // };

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>
          <strong>{body}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        {/* <Popup> can be extracted inorder to conform with DRY principles */}
        <Popup
          content="comment on post"
          inverted
          trigger={
            <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
              <Button color="blue" basic>
                <Icon name="comments" />
              </Button>
              <Label as="a" basic color="blue" pointing="left">
                {commentCount}
              </Label>
            </Button>
          }
        />
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  );
};

export default PostCard;
