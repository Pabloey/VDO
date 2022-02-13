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
      <h3>{</h3>

    </div>
  );
}
