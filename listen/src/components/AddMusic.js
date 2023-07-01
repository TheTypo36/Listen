import React ,{useState,useEffect} from "react";
import styled from "styled-components";
import instance from '../api/Axios'
const AddMusic = () => {
  const [formData, setFormData] = useState({
    songName: "",
    poster: null,
    artistName: "",
    artistImg: null,
    song: null,
    songLabel: "RecentlyPlayed",

  });
  const changeHandler = (e)=>{
    switch(e.target.name){
      case "artistImg":
        setFormData({...formData, artistImg: e.target.files[0]});
        break;
      case "poster":
        setFormData({...formData, poster: e.target.files[0]});
        break;
      case "song":
        setFormData({...formData, song: e.target.files[0]});
        break;
      default:
        setFormData({...formData,[e.target.name]: e.target.value});
        break;
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
      const data = new FormData();
      data.append('songName',formData.songName);
      data.append('artistName',formData.artistName);
      data.append('song',formData.song);
      data.append('poster',formData.poster);
      data.append('artistImg',formData.artistImg);
      data.append('songLabel',formData.songLabel);
    console.log('formData',formData);
    instance.post('/song/addSong', data,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
      .then((Response)=>{
        console.log(Response.data);
      })
      .catch((error)=>{
        console.error(error);
      })
  }

  return <AddMusicContainer>
    
      <h1>Add Music</h1>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div>
          <label>Song Name</label>
          <input type="text" name="songName" value={formData.songName} onChange={changeHandler} placeholder="Enter the Song Name"/>
        </div>
        <div>
          <label>Song Poster</label>
          <input type="file" name="poster" onChange={changeHandler} />
        </div>
        <div>
          <label>Artist Name</label>
          <input type="text" name="artistName" value={formData.artistName} onChange={changeHandler} placeholder="Enter the Artist Name"/>
        </div>
        <div>
          <label>Artist Image</label>
          <input type="file" name="artistImg" onChange={changeHandler} />
        </div>
        <div>
          <label>Upload the song</label>
          <input type="file" name="song" onChange={changeHandler} />
        </div>
        <div id="songLabel">
          <label>Song label</label>
            <input type="radio" name="songLabel" value="recentlyPlayed" />Recently Played
            <input type="radio" name="songLabel" value="ListenOriginal" />Listen Original

        </div>
        <button type="submit">Upload</button>
      </form>
    
  </AddMusicContainer>
};
const AddMusicContainer= styled.div`
  color: white;
  position: absolute;
  top: 10%;
  left: 40%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 600px;
  height: auto;
  background: linear-gradient(black 0%,rgba(255, 255, 255, 0.1) 100%);
  color: white;
  border-radius: 10px;
  div{
    margin: 10px;
  }
  label{
    display: block;
    
  }
  input[type="file"] {
    background-color: lightgeen;
  }

`;

export default AddMusic;
