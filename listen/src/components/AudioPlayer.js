import React, { useState,useEffect,useRef} from "react";
import styled from "styled-components";


const AudioPlayer = ({currentMusic}) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


   const audioSrc = currentMusic.audioSrc;

  
 

  
  const handlePlayAndPause = () => {
    if (playing) {
      setPlaying(false);
      audioRef.current.pause();
    } else {
      setPlaying(true);
      audioRef.current.play();
    }
  };
  const handleTimeUpdate=()=>{
    setCurrentTime(audioRef.current.currentTime);
   
  }
  const handleLoadUpData=()=>{
    setDuration(audioRef.current.duration);
  }
  const handleTimeChange = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
   
  };
  const handleEnd = () =>{
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }
  
  const formatTime = (time)=>{
    const minutes = Math.floor(time/60).toString().padStart(2,'0');
    const seconds = Math.floor(time%60).toString().padStart(2,'0');
    return `${minutes}:${seconds}`
  }
  const handleChange = () =>{
    setPlaying(true);
    
  }
  return (
    <AudioContainer>
      <Player>
        <AudioControl>
          <PlayPauseController>

            {playing ? (
              <button onClick={handlePlayAndPause}>
                <img src="/assets/images/pause.png" />
            </button>
              ) : (
                <button onClick={handlePlayAndPause}>
                  <img src="/assets/images/play-button.png" />

                </button>
            
                )}
            </PlayPauseController>
            <VolumnController>

            </VolumnController>

        </AudioControl>
        <AudioInfo>
          <AudioCover>
            <img src={currentMusic.poster} />
          </AudioCover>
          <AudioDetail>
            <AudioTitle>{currentMusic.name}</AudioTitle>
            <AudioArtist>{currentMusic.artist}</AudioArtist>
          </AudioDetail>
        </AudioInfo>
          <AudioDuration>
            <div>{formatTime(currentTime)}</div>
            <div>{formatTime(duration)}</div>
          </AudioDuration>
        <AudioProgress>
          <input type="range" min="0" step="0.01" max={duration} value={currentTime} onChange={handleTimeChange}/>
        </AudioProgress>
      </Player>
      <audio autoPlay ref={audioRef} src={audioSrc} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadUpData} onEnded={handleEnd} onPlay={handleChange}/>
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
  position: relative;
`;

const AudioControl = styled.div`
  position: absolute;
  left: 50%;
  top: 10px;
 
  button {
    background-color: inherit;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    margin: 0 10px;
    img{
      width: 35px;
    }
  }
`;
const PlayPauseController = styled.div`
`;
const VolumnController = styled.div``;
const AudioDuration = styled.div`
  width: 97%;
  color: white;
  display: flex;
  justify-content: space-between;
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
  position: relative;
  top: -45px;
  input{
    width: 97%;
    height: 100%;
 
    border-radius: 10px;
  }
`;




export default AudioPlayer;
