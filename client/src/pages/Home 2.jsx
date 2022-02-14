import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetVideos } from "../services/routes";
import VideoList from "../component/VideoList";

export default function Home(props) {
  const [videos, setVideos] = useState([]);
  const shuffledVideos = videos.sort((a, b) => 0.5 - Math.random());
  useEffect(() => {
    const getVideos = async () => {
      const res = await GetVideos();
      setVideos(res);
    };
    getVideos();
  }, []);

  return (
    <div className="video-list">
      {shuffledVideos.map((e, i) => (
          <VideoList key={i} e={e} videos={videos} />
      ))}
    </div>
  );
}
