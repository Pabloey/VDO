import ReactPlayer from "react-player";
import TextField from "@mui/material/TextField";
import PostComment from "../component/PostComment";
import { useEffect, useState } from "react";
import { SpecVideo } from "../services/routes";
import { Divider } from "@mui/material";

export default function VideoPage(props) {
  const [videos, setVideos] = useState({});
  const [videoComments, setVideoComments] = useState([]);
  const [user, setUser] = useState({});

  const set_user = () => {
    if (!JSON.parse(localStorage.getItem("user"))) {
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
      <ReactPlayer url={`${videos.video_url}`} controls playing={true} width="auto" height="75vh" className="videopage-player" />
      <div className="comment-section">
        <h1>{videos.title}</h1>
        <h2>{videos.user}</h2>
        <h3>{videos.description}</h3>
        <br />
        <br />
        <div>
          <Divider>
            <h2>Comments</h2>
            <h3>{videoComments.length}</h3>
          </Divider>
          {JSON.parse(localStorage.getItem("user")) ? (
            <PostComment {...props} user={user} setVideoComments={setVideoComments} />
          ) : (
            "Log in to leave a comment"
          )}
          <br />
          <br />
          <br />

          <div className="video-comments-container">
            {videoComments.map((e, i) => (
              <div key={i} className="video-comments">
                <h4>{e.user}</h4>
                <p>{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
