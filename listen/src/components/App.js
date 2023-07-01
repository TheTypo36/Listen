import React, { useEffect, useState } from "react";
import {Route,Router,Routes} from "react-router-dom";
import SignIn from "./SignIn";
import Header from "./Header";
import Aside from "./Aside";
import Home from "./Home";
import AudioPlayer from "./AudioPlayer";
import AddMusic from "./AddMusic";
function App() {

  const [currentMusic,setMusic] = useState( {
    name: "Hope",
    poster: "/assets/images/hopePoster.jpg",
    artist: "xxxtentacion",
    artistImg: "/assets/images/hopeArtist.jpg",
    releaseDate: "2018",
    audioSrc: "/assets/audioFiles/Hope.mp3",
  
  });
  const handlePostMusic = (Event) => {
  }
    
  return (
    <div className="App">


    <Routes>

      <Route exact path = "/" element={<Home currentMusic={currentMusic} setMusic={setMusic} />} />
      <Route path = "/addMusic" element={<AddMusic />} />
     
    </Routes>

      <Header />
      <Aside handlePostMusic={handlePostMusic} />
      <AudioPlayer currentMusic={currentMusic}/>
    </div>
  );
}

export default App;
