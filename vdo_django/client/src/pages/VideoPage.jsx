import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { SpecVideo } from "../services/routes";

export default function VideoPage(props) {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    const getVideos = async () => {
      const res = await SpecVideo(props.match.params.id);
      setVideos(res);
    };
    getVideos();
  }, []);

  return (
    <div>
      <ReactPlayer url={`${videos.video_url}`} />
      <h3>{videos.user}</h3>
      <h3>{videos.title}</h3>
      <h5>{videos.description}</h5>
      <div>
        <h3>Comments</h3>
        {videos.comments.map((e, i) => (
          <div>
            <h5>{e.user}</h5>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
