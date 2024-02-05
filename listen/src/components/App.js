import React, { useEffect, useState ,jsx} from "react";
import {Route,Router,Routes} from "react-router-dom";
import SignIn from "./SignIn";
import Header from "./Header";
import Aside from "./Aside";
import Home from "./Home";
import AudioPlayer from "./AudioPlayer";
import AddMusic from "./AddMusic";
import Detail from "./Detail";
function App() {

  const [playingSong,setplayingSong] = useState( {
    name: "Hope",
    poster: "/assets/images/hopePoster.jpg",
    artist: "xxxtentacion",
    artistImg: "/assets/images/hopeArtist.jpg",
    releaseDate: "2018",
    audioSrc: "/assets/audioFiles/Hope.mp3",
  
  });
  return (
    <div className="App">


    <Routes>

      <Route exact path = "/" element={<Home playingSong={playingSong} setplayingSong={setplayingSong} />} />
      <Route path = "/addMusic" element={<AddMusic />} />
      <Route path ="/detail" element={<Detail />} />
    </Routes>

      <Header />
      <Aside  />
      <AudioPlayer playingSong={playingSong}/>
    </div>
  );
}


export default App;

