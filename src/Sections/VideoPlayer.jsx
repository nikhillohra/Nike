import React, { useState } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const VideoPlayer = ({ videoSrc, posterSrc }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  const handlePosterClick = () => {
    setVideoEnded(false);
  };

  return (
    <>
      <div className="video-container w-full justify-center p-10 ">
        {videoEnded ? (
          <div onClick={handlePosterClick}>
            <img src={posterSrc} alt="Poster" />
          </div>
        ) : (
          <Player
            fluid={true}
            autoPlay={true}
            playsInline
            src={videoSrc}
            poster={posterSrc}
            muted={true}
            disableDefaultControls
            disableControls
            onEnded={handleVideoEnded}
          />
        )}
        <style>
          {`
         
          .video-react-control-bar {
            display: none !important;
          }

          .video-react-big-play-button {
            width: 60px !important;
            height: 40px !important;
            border-radius: 10px !important;
            background-color: rgba(255, 255, 255, 0.3) !important;
          }
          
          .video-react-big-play-button:before {
            font-size: 30px !important;
            align-items: center;
            margin-top:-2.5px
       
          }

          .video-react-big-play-button:hover {
            background-color: rgba(80, 85, 75, 0.7) !important;
          }

        `}
        </style>
      </div>
    </>
  );
};

export default VideoPlayer;
