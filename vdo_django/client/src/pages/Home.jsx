import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetVideos } from "../services/routes";
import VideoList from "../component/VideoList";

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
        <Link style={{ textDecoration: "none", color: 'black'}} to={`/videos/${e.id}`}>
          <VideoList key={i} e={e} />
        </Link>
      ))}
    </div>
  );
}
