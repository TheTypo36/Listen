import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
const ListenOriginal = () => {
  const [song, setSong] = useState([
    {
      name: "Hope",
      poster: "/assets/images/hopePoster.jpg",
      artist: "xxxtentacion",
      artistImg: "/assets/images/hopeArtist.jpg",
      releaseDate: "2018",
    },
    {
      name: "The Search",
      poster: "/assets/images/searchPoster.jpg",
      artist: "NF",
      artistImg: "/assets/images/searchArtist.jpg",
      releaseDate: "2019",
    },
    {
      name: "Tuesday",
      poster: "/assets/images/tuesdayPoster.jpg",
      artist: "Burak Yeter",
      artistImg: "/assets/images/tuesdayArtist.jfif",
      releaseDate: "2016",
    },
    {
      name: "Summer High",
      poster: "/assets/images/summerHighPoster.jpg",
      artist: "Ap Dhillon",
      artistImg: "/assets/images/summerHighArtist.jpg",
      releaseDate: "2022",
    },
  ]);
  return (
    <Wrap>
      <Title>Listen Original</Title>
      <Container>
        {song.map((item) => (
          <MusicCard>
            <img src={item.poster} alt={item.name} />
            <div>
              <span id="songName">{item.name}</span>
              <span id="artistName">{item.artist}</span>
            </div>
          </MusicCard>
        ))}
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
  @media (max-width: 1300px) {
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

  width: 220px;

  height: 150px;
  @media (max-width: 1300px) {
    width: 350px;
    height: 100px;
  }
  @media (max-width: 1100px) {
    width: 450px;
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
