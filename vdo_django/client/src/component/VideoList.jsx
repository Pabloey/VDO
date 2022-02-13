import React from "react";
import ReactPlayer from "react-player";

export default function VideoList(props) {
  return (
    <>
      <h4>{props.e.title}</h4>
      <h6>{props.e.user}</h6>
      <ReactPlayer style={{ pointerEvents: "none" }} showinfo="0" controls="false" width="210px" height="120px" url={`${props.e.video_url}`} />
    </>
  );
}
