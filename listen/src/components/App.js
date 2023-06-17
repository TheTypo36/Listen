import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import Header from "./Header";
import Aside from "./Aside";
import Home from "./Home";
import AudioPlayer from "./AudioPlayer";
import AddMusic from "./AddMusic";
function App() {
  const [showPostMusic, setShowPostMusic] = useState(false);
  const [currentMusic,setMusic] = useState({});
  const handlePostMusic = (Event) => {
    Event.preventDefault();

    showPostMusic ? setShowPostMusic(false) : setShowPostMusic(true);
    console.log(showPostMusic);
  };
  return (
    <div className="App">
      {showPostMusic?(
      <AddMusic />):(<Home currentMusic={currentMusic} setMusic={setMusic}/>)}
      <Header />
      <Aside handlePostMusic={handlePostMusic} />
      <AudioPlayer currentMusic={currentMusic}/>
    </div>
  );
}

export default App;
