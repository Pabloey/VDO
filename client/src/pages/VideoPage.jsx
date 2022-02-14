import ReactPlayer from "react-player";
import TextField from "@mui/material/TextField";
import PostComment from "../component/PostComment";
import { useEffect, useState } from "react";
import { SpecVideo } from "../services/routes";

export default function VideoPage(props) {
  const [videos, setVideos] = useState({});
  const [videoComments, setVideoComments] = useState([]);
  const [user, setUser] = useState({});

  const set_user = () => {
    if (!JSON.parse(localStorage.getItem("user"))) {
      console.log("no token");
    } else if (JSON.parse(localStorage.getItem("user"))) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  };

  useEffect(() => {
    const getVideos = async () => {
      const res = await SpecVideo(props.match.params.id);
      setVideos(res);
      setVideoComments(res.comments.reverse());
      set_user();
    };
    getVideos();
  }, []);

  return (
    <div className="video-page">
      <ReactPlayer url={`${videos.video_url}`} controls playing={true} width="auto" height="75vh" className="videopage-player"/>
      <div>
        <h1>{videos.title}</h1>
        <h2>{videos.user}</h2>
        <h5>{videos.description}</h5>
        <div>
          <h3>Comments</h3>
          {JSON.parse(localStorage.getItem("user")) ? <PostComment {...props} user={user} setVideoComments={setVideoComments} /> : "Log in to leave a comment"}
          {videoComments.map((e, i) => (
            <div key={i} className="video-comments">
              <h5>{e.user}</h5>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
