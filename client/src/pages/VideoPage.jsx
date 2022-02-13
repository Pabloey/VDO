import ReactPlayer from "react-player";
import TextField from "@mui/material/TextField";
import PostComment from "../component/PostComment";
import { useEffect, useState } from "react";
import { SpecVideo } from "../services/routes";

export default function VideoPage(props) {
  const [videos, setVideos] = useState({});
  const [videoComments, setVideoComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getVideos = async () => {
      const res = await SpecVideo(props.match.params.id);
      setVideos(res);
      setVideoComments(res.comments.reverse());
      setUser(JSON.parse(localStorage.getItem("user")));
    };
    getVideos();
  }, []);

  return (
    <div>
      <ReactPlayer url={`${videos.video_url}`} controls />
      <h3>{videos.user}</h3>
      <h3>{videos.title}</h3>
      <h5>{videos.description}</h5>
      <div>
        <h3>Comments</h3>
        <PostComment {...props} user={user} setVideoComments={setVideoComments} />
        {videoComments.map((e, i) => (
          <div key={i}>
            <h5>{e.user}</h5>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}