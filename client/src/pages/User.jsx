import UserComments from "../component/UserComments";
import UserVideos from "../component/UserVideos";
import { GetUser } from "../services/routes";
import { useEffect, useState } from "react";

export default function User(props) {
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await GetUser(JSON.parse(localStorage.getItem("user")).id);
      setUser(res);
      setComments(res.comment_list);
      setVideos(res.video_list);
    };
    getUserDetails();
  }, []);

  return (
    <div>
      <h1>Welcome to your base, {user.username}</h1>
      <h3>Update your posts here</h3>
      <div>
        <h2>Your Comments</h2>
        <div>
          {comments.map((e, i) => (
            <UserComments key={i} {...props} comments={e} setComments={setComments} />
          ))}
        </div>
      </div>

      <div>
        <h2>Your videos</h2>
        <div>
          {videos.map((e, i) => (
            <UserVideos key={i} {...props} video={e} setVideos={setVideos} />
          ))}
        </div>
      </div>
    </div>
  );
}
