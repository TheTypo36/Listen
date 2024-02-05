import React from "react";
import { Routes,useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
const ListenOriginal = ({setplayingSong,songs}) => {
  const navigate = useNavigate();
  console.log('props in listen origin', setplayingSong);
  
  const handleClick = (item) =>{
    console.log('changed listen',item);

    setplayingSong(item);
    navigate('/detail',{
      state:{
        item: item,
      }
    });
  }
  console.log('listenOriginal', songs);
  return (
    <Wrap>
     
      <Title>Listen Original</Title>
      <Container>
        {songs.map((item) => {
          if(item.songLabel=="ListenOriginal"){
            const itemPosterUrl = item.posterUrl.replace(/C:\\Users\\Administrator\\Desktop\\Listen\\listen\\public/, "");
            const itemSongUrl = item.songUrl.replace(/C:\\Users\\Administrator\\Desktop\\Listen\\listen\\public/, "");
             const itemArtistImg =  item.artistImgUrl.replace(/C:\\Users\\Administrator\\Desktop\\Listen\\listen\\public/, "");
             item.posterUrl = itemPosterUrl;
             item.songUrl = itemSongUrl;
             item.artistImgUrl = itemArtistImg;
            
            return(
            <MusicCard onClick={() => handleClick(item)}>
            <img src={item.posterUrl} alt={item.artistName} />
            <div>
            <span id="songName">{item.songName}</span>
            <span id="artistName">{item.artistName}</span>
            </div>
            </MusicCard>
        );
        }
          })}
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div``;
const Container = styled.div`
  color: white;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 65%;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const MusicCard = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier();
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    border-radius: 10px;

    inset: 0px;
    display: block;
    height: 65%;
    width: 80%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;

    top: 10%;
    left: 10%;
  }
  div {
    position: absolute;
    bottom: 4%;
    left: 10%;
    display: flex;
    flex-direction: column;
  }
  &:hover {
    img {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
    background-color: #282828;
    border-color: rgba(249, 249, 249, 0.8);
  }
  width: 50%
  min-width: 220px;

  height: 150px;
  @media (max-width: 1500px) {
    width: 100%;
     min-width: 350px;
    height: 100px;
  }
  @media (max-width: 1100px) {
    width: 100%;
     min-width: 450px;
    height: 100px;
  }
  // background-color: #171717;
  // border-radius: 10px;
  // @media (max-width: 1000px) {
  //   width: 70%;
  //   max-width: 350px;
  // }
  // img {
  //   width: 100%;
  //   height: 75%;
  //   border-radius: 10px;
  // }
  #songName {
    font-size: 16px;
  }
  #artistName {
    font-size: 13px;
  }
`;
const Title = styled.h2`
  color: white;
`;
export default ListenOriginal;
