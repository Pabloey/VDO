import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { GetVideos } from "../services/routes";

export default function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const res = await GetVideos();
      setVideos(res);
    };
    getVideos();
  }, []);

  return (
    <div>
      {videos.map((e, i) => (
        <div key={i}>
          <h4>{e.title}</h4>
          <ReactPlayer width="160px" height="90px" url={e.video_url} />
          <h6>{e.user}</h6>
        </div>
      ))}
    </div>
  );
}
