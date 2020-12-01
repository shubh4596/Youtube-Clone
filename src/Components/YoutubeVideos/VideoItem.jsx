import React from "react";
import Moment from "react-moment";
import "./Video.css";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div>
      <section id="videoItemBlock">
        <article>
          <div className="innerBlock" onClick={() => onVideoSelect(video)}>
            <div className="video_thumbnail">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.title}
              />
            </div>
            <div className="video_descriptions">
              <h2>{video.snippet.title}</h2>
              <p>{video.snippet.channelTitle}</p>
              <p>
                <Moment fromNow>{video.snippet.publishedAt}</Moment>
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default VideoItem;