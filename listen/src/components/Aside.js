import React from "react";
import styled from "styled-components";

const Aside = () => {
  return (
    <AsideContainer>
      <Logo>
        <img src="/assets/images/logo.png" alt="appLogo" />
      </Logo>
      <NavMenu>
        <Home>
          <img src="/assets/images/home.png" />
          <span>Home</span>
        </Home>
        <Search>
          <img src="/assets/images/search.png" />
          <span>Search</span>
        </Search>
        <YourLibrary>
          <img src="/assets/images/library.png" />
          <span>Your Library</span>
        </YourLibrary>

        <CreatePlaylist>
          <img src="/assets/images/createPlaylist.png" />
          <span>Create Playlist</span>
        </CreatePlaylist>
        <LikedSongs>
          <img src="/assets/images/liked.png" />
          <span>Liked Songs</span>
        </LikedSongs>
      </NavMenu>
    </AsideContainer>
  );
};

const AsideContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: #000000;
  color: #b2b2b2;
  display: flex;
  flex-direction: column;

  align-items: center;
  z-index: 4;
`;
const NavMenu = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;

  a {
    margin-bottom: 15px;

    cursor: pointer;
    display: flex;

    img {
        width: 30px;
        background-color: #00000;
        margin-right: 25px;
        margin-bottom: 10px;
    }
    span{
        color: rgb(249,249,249);

        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;


    &:before{
        background-color: rgb(249,249,249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
        width: auto;

    }
  }
  &:hover{
    span:before{
        transform: scaleX(.85);
        opacity: 1;

    }
  }
`;
const Home = styled.a``;
const Search = styled.a``;
const YourLibrary = styled.a``;
const CreatePlaylist = styled.a``;
const LikedSongs = styled.a``;
const Logo = styled.div`
  margin-top: 10px;
  img {
    width: 80px;
  }
`;
export default Aside;
