import React from "react";
import ReactPlayer from "react-player";

// Funktion för att spela upp en video på sidan

function VideoArea() {
  return (
    <div className="VideoArea">
      <div className="Sidebar">
        <div className="Videos">
          <div className="Video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=SUngzUtFr7Q"
              height="170px"
              width="280px"
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoArea;
