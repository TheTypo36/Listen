import React, { useState,useEffect,useRef} from "react";
import styled from "styled-components";


const AudioPlayer = ({currentMusic}) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);


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
  const handleVolumeChange = (e) =>{
    const updatedVolume = parseFloat(e.target.value);
    audioRef.current.volume = updatedVolume;
    setVolume(updatedVolume);

  }
  return (
    <AudioContainer>

      <AudioInfo>
          <AudioCover>
            <img src={currentMusic.poster} />
          </AudioCover>
          <AudioDetail>
            <AudioTitle>{currentMusic.name}</AudioTitle>
            <AudioArtist>{currentMusic.artist}</AudioArtist>
          </AudioDetail>
        </AudioInfo>
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

        </AudioControl>
            <AudioDuration>
            <div>{formatTime(currentTime)}</div>
            <div>{formatTime(duration)}</div>
          </AudioDuration>
        <AudioProgress>
          <input type="range" min="0" step="0.01" max={duration} value={currentTime} onChange={handleTimeChange}/>
        </AudioProgress>
        <VolumnController>
                  <img src="/assets/images/audio.png" />
                  <input type="range" max = "1" min="0" step="0.01" value={volume} onChange={handleVolumeChange} />
        </VolumnController>



      <audio autoPlay ref={audioRef} src={audioSrc} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadUpData} onEnded={handleEnd} onPlay={handleChange}/>
    </AudioContainer>
  );
};
const AudioContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 72px;
  padding: 13px;
  border-radius: 10px;
  z-index: 11;

  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 4px#282828;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;


const AudioControl = styled.div`
  position: absolute;
  left: 0;
  top: 10%;
  width: 100%;
  button {
    background-color: inherit;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    position: relative;
    left: 50%;
    img{
      width: 35px;
    }
  }
`;
const PlayPauseController = styled.div`
`;
const VolumnController = styled.div`

  position: relative;
  left: -30px;
  top: 30%;
  display: flex;
  flex-direction: row;
  input{
    height: 3px;
    margin-top: 18px;
  }
  img{
    height: 20px;
    margin: 10px
  }
  @media (max-width: 950px){
    input{
      width: 50px;
    }
  }
`;
const AudioDuration = styled.div`
  font-size: 12px;
  width: 47%;
  color: white;
  display: flex;
  justify-content: space-between;
  position: absolute;
    top: 57px;
    left: 26%;
    @media (max-width: 1100px){
      width: 50%;
      left: 24.5%;
    }
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
  width: 43%;
  height: 3px;
  position: relative;
  top: 25px;
  input{
    width: 100%;
    height: 100%;
    position: relative;
    top: 12px;

    border-radius: 10px;
  }
  @media (max-width: 950px){
    input{
      left: -10%;
    }
`;




export default AudioPlayer;
