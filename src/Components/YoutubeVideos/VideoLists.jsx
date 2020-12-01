import React from "react";
import VideoItem from "./VideoItem";

const VideoLists = ({ videos, onVideoSelect }) => {
  let videoList = videos.map((video) => {
    return (
      <VideoItem key={video.id} video={video} onVideoSelect={onVideoSelect}/>
    );
  });
  return videoList;
};

export default VideoLists;
