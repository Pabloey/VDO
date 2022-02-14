import React from "react";
import ReactPlayer from "react-player";

export default function VideoList(props) {
  return (
    <div className="video-box">
      <h5> {props.e.title}</h5>
      <h6>{props.e.user}</h6>
      <ReactPlayer style={{ pointerEvents: "none" }} showinfo="0" width="210px" height="120px" url={`${props.e.video_url}`} />
    </div>
  );
}
