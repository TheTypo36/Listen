import React, { useState } from "react";
import styled from "styled-components";

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  // const audioSrc = "C:/Users/Administrator/Downloads/miAmor.mp3";
  const audioSrc =
    "https://drive.google.com/uc?export=download&id=1bFGsvE_1KROnxDujq4qoOTcUfZFjYNRn";
  const audioRef = React.createRef();
  const handlePlayAndPause = () => {
    if (playing) {
      setPlaying(false);
      audioRef.current.pause();
    } else {
      setPlaying(true);
      audioRef.current.play();
    }
  };
  const PlayIcon = () => (
    <svg viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8 5v14l11-7z" />
    </svg>
  );
  return (
    <AudioContainer>
      <Player>
        <AudioControl>
          {playing ? (
            <button onClick={handlePlayAndPause}>
              <PlayIcon />
            </button>
          ) : (
            <button onClick={handlePlayAndPause}>
              <i className="fas fa-play"></i>
            </button>
          )}
        </AudioControl>
        <AudioInfo>
          <AudioCover>
            <img src="/assets/images/miAmorPoster.jpg" />
          </AudioCover>
          <AudioDetail>
            <AudioTitle>Mi Amor</AudioTitle>
            <AudioArtist>Shann</AudioArtist>
          </AudioDetail>
        </AudioInfo>
        <AudioProgress>
          <AudioProgressBar></AudioProgressBar>
        </AudioProgress>
      </Player>
      <audio ref={audioRef} src={audioSrc} />
    </AudioContainer>
  );
};
const AudioContainer = styled.div`
  position: fixed;
  z-index: 11;
  width: 100%;

  bottom: 0;
`;

const Player = styled.div`
  padding: 13px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  box-shadow: 0 2px 4px#282828;
  width: 100%;
`;

const AudioControl = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  button {
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    margin: 0 10px;
  }
`;

const AudioInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;
const AudioDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const AudioTitle = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const AudioCover = styled.div`
  height: 70px;
  position: relative;
  width: 70px;
  margin-right: 15px;

  img {
    position: absolute;
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

const AudioArtist = styled.div`
  color: #b3b3b3;
  font-size: 14px;
`;

const AudioProgress = styled.div`
  width: 100%;
  height: 2px;
  background-color: #535353;
`;

const AudioProgressBar = styled.div`
  width: 50%;
  height: 100%;
  background-color: #1db954;
  border-radius: 10px;
`;

export default AudioPlayer;
