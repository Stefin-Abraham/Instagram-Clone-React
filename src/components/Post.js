import React, { useState } from "react";
import styled from "styled-components";

function Post({ userName, photoURL, caption, imageURL}) {
    const [moreButton, setMoreButton] = useState(false);
    return (
  <Container>
    <UserInfo>
        <img src ={photoURL} />
        <p>{userName}</p>
    </UserInfo>
    <Content>
        <img 
          src={imageURL}
          alt="/"
        />
    </Content>
    <PostCTA>
        <CTAButtons>
            <img src="./heart.png" alt="" />
            <img src="./chat 1.png" alt="" />
        </CTAButtons>
        <LikeCount>
            <p>100 Likes</p>
        </LikeCount>
        <PostDescription moreButton={moreButton}>
            <h5>{caption}</h5>
            <div className="description-buttons">
                <p>view all comments</p>
                <p onClick={() => setMoreButton(!moreButton)}>
                    {moreButton ? "less" : "more"}
                </p>
            </div>
        </PostDescription>
    </PostCTA>
  </Container>
  );
}

const Container = styled.div`
  height: fit-content;
  width: 100%;
  border: 1px solid lightgray;
  background-color: #fff;
  margin-top: 20px;
`;

const UserInfo = styled.div`
  height: 60px;
  padding: 5px 10px;
  display: flex;
  align-items: center;

  border-bottom: 1px solid lightgray;

  img {
    width: 38px;
    height: 38px;
    border-radius: 100%;
    margin-left: 10px;
    border: 1px solid lightgray;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    margin-left: 10px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid lightgrey;

  img {
    width: 100%;
  }
`;

const PostCTA = styled.div`
  width: 90%;
  margin: auto;
`;

const CTAButtons = styled.div`
  height: 54px;
  display: flex;
  align-items: center;

  img {
    width: 22px;
    height: 22px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const LikeCount = styled.div`
  p {
    font-size: 15px;

    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h5 {
    font-size: 14px;
    line-height: 20px;
    border: none;
    width: 100%;
    height: ${(props) => (props.moreButton ? "fit-content" : "40px")};
    overflow-y: hidden;
    word-break: break-all;
    min-height: 40px;
    font-weight: 500;
  }

  .description-buttons {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    color: gray;
    p {
      cursor: pointer;
    }
  }

  .recent-comment {
    font-size: 12px;
    display: flex;
    align-items: center;
    strong {
      margin-right: 10px;
    }
  }
`;

const CommentInput = styled.div`
  padding: 10px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid lightgray;

  input {
    flex: 0.9;
    height: 30px;
    border: none;
    margin-right: 10px;
    outline: none;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 15px;
    color: #18a4f8;
  }
`;

const AllCommentContainer = styled.div`
  padding: 15px;

  .post-comment {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .user-image {
      margin-right: 20px;
      img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }
    }

    .user-comment {
      display: flex;

      font-size: 13px;

      strong {
        margin-right: 10px;
      }
    }
  }
`;
export default Post;
