import React from "react";
// import { auth } from "./firebase";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import Navbar from "./Navbar";
import Post from "./Post";
function Home() {
  const [{ user }] = useStateValue();
  return (
    <Container>
      <Navbar />
      <Inner>
        <Main>
            <PostContainer>
              <Post 
                userName="Hero" 
                photoURL="./user.png" 
                caption = "A tree is a tall plant that can live for a very long time. It has a single stem or trunk and branches that support leaves. Beneath the ground, a tree has a root system that acts as an anchor and stores the water and nutrients the plant needs to grow."
                imageURL = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
              />
              <Post 
                userName="Rock" 
                photoURL="./user.png" 
                caption = "   A tree is a tall plant that can live for a very long time. It has a single stem or trunk and branches that support leaves. Beneath the ground, a tree has a root system that acts as an anchor and stores the water and nutrients the plant needs to grow."
                imageURL = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
              />
            </PostContainer>
        </Main>
      </Inner>
    </Container>
  );
}

const Container = styled.div``;

const Inner = styled.div`
  width: 100%;

  margin-top: 60px;
`;

const Main = styled.main`
  max-width: 935px;
  margin: 20px auto;
  height: 680px;
  display: flex;
  justify-content: space-evenly;
`;

const PostContainer = styled.div`
  max-width: 620px;
  width: 100%;
`;

export default Home;
