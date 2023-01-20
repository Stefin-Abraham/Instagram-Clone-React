import React from "react";
// import { auth } from "./firebase";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import Navbar from "./Navbar";

function Home() {
  const [{ user }] = useStateValue();
  return (
    <Container>
        <Navbar />
        <p>{user ? user.userName : "PLease Login First"}</p>
    </Container>
  );
}

const Container = styled.div``;

export default Home;
