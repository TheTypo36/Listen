import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import RecentlyPlayed from "./RecentlyPlayed";
import ListenOriginal from "./ListenOriginal";

const Home = (props) => {
  return (
    <Container>
      {console.log('props',props)}
      <RecentlyPlayed  setMusic={props.setMusic}/>
      <ListenOriginal setMusic={props.setMusic}/>
    </Container>
  );
};
const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding-left: 280px;
  padding-bottom: 120px;
`;
export default Home;
