import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function VideoList(props) {
  return (
    <div className="video-box">
      <Link style={{ textDecoration: "none", color: "black" }} to={`/videos/${props.e.id}`}>
        <h5 style={{ textAlign: "right" }}>{props.e.user}</h5>
        <ReactPlayer style={{ pointerEvents: "none" }} width="320px" height="180px" showinfo="0" url={`${props.e.video_url}`} />
        <h5 style={{ width: "320px" }}>{props.e.title}</h5>
      </Link>
    </div>
  );
}
