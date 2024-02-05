import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import RecentlyPlayed from "./RecentlyPlayed";
import ListenOriginal from "./ListenOriginal";
import instance from "../api/Axios";

const Home = ({setplayingSong}) => {
  const [songs,setSongs] = useState([]);

  useEffect(()=>{

    const fetchSong = async () =>{
      try{

        const Response = await instance.get('/song/getSong')
        
        // console.log('homeGetSongResponse', Response);
        setSongs(Response.data.songs);
        
      }catch(err){
        console.log(err);
      }
    }
    fetchSong();

    },[]);
  

  return (
    <Container>
 

           <RecentlyPlayed  songs={songs} setplayingSong={setplayingSong}/>
    

          <ListenOriginal songs={songs} setplayingSong={setplayingSong}/>
      

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
  background: linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%);
`;
export default Home;
