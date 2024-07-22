import React from "react";
import VideoPlayer from "./VideoPlayer";
import "../index.css";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const Video = () => {
  const videoSrc =
    "https://api.nike.com/content/asset_video_manifest/v1/6349200525112";
  const posterSrc =
    "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/263c452a-3a28-499b-bd27-a346f8178fd7/image.png";

  return (
    <>
      <div
        className="xl:w-full h-full flex justify-center
     outline-none items-center flex-col pt-20 px-8  "
      >
        <h1 className="pt-14 pb-3 sm:pb-4 md:pb-5 lg:pb-0  text-[20px] now font-[500] ">
          New Arrivals
        </h1>
        <VideoPlayer videoSrc={videoSrc} posterSrc={posterSrc} />
      </div>
      <div className="xl:w-full h-full flex justify-center items-center flex-col">
        <p1 className="p-0 pt-6  pb-7 leading-3 ">Feel the Unreal</p1>
        <h2 className="p-0 mb-4 leading-8 text-[50px]">AIR MAX DN</h2>
        <h3 className="mt-10 mb-14 text-center">
          The next generation of Air technology is here.
        </h3>
        <a
          href="https://www.nike.com/in/w/mens-air-max-dn-5ufejznik1"
          target="_blank"
        >
          <Button className="" label="Shop now" iconURL={arrowRight} />
        </a>
      </div>
    </>
  );
};

export default Video;
