import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <MusicPlayer> Music Player</MusicPlayer>;
};
const MusicPlayer = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 11;
  background-color: #181818;
  width: 100%;
  height: 70px;
`;
export default Footer;
