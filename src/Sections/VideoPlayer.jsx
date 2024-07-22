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
      <div className="video-container w-full justify-center items-center lg:p-10 ">
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
            position :relative;
          }
          
          .video-react-big-play-button:before{
          display:flex;
          align-items:center;
          justify-content:center;
          position:absolute;
          top:50%;
          left:50%;
          transform: translate(-50%, -50%);          
           font-size: 36px !important;
           margin-top: 17.5px;
           margin-left:27.6px;
  


          }

          @media (max-width: 1200px) {
  .video-react-big-play-button {
    width: 50px !important;
    height: 35px !important;
    border-radius: 8px !important;
  }

  .video-react-big-play-button:before {
    font-size: 32px !important;
    margin-top: 15.8px;
    margin-left:21.5px;
  }
}

@media (max-width: 992px) {
  .video-react-big-play-button {
    width: 40px !important;
    height: 30px !important;
    border-radius: 6px !important;
  }
   .video-react-big-play-button:before {
    font-size: 28px !important;
    margin-top: 13.5px;
    margin-left:18px;
  }

}

@media (max-width: 768px) {
  .video-react-big-play-button {
    width: 35px !important;
    height: 25px !important;
    border-radius: 5px !important;
  }

  .video-react-big-play-button:before {
    font-size: 23px !important;
    margin-top: 10.5px;
    margin-left:14.5px;
  }
}

@media (max-width: 576px) {
  .video-react-big-play-button {
    width: 30px !important;
    height: 20px !important;
    border-radius: 4px !important;
  }
   .video-react-big-play-button:before {
    font-size: 20px !important;
    margin-top: 8.4px;
    margin-left:13px;
  }

}

@media (max-width: 480px) {
  .video-react-big-play-button {
    width: 25px !important;
    height: 18px !important;
    border-radius: 3px !important;
  }

  .video-react-big-play-button:before {
    font-size: 15.5px !important;
    margin-top: 7.4px;
    margin-left:10.4px;
  }
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
