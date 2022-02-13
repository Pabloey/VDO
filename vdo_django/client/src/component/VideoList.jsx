import React from "react";
import ReactPlayer from "react-player";

export default function VideoList(props) {
  return (
    <div>
      <h4>{props.e.title}</h4>
      <ReactPlayer controls="false" width="210px" height="120px" url={props.e.video_url} />
      <h6>{props.e.user}</h6>
    </div>
  );
}
