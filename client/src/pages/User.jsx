import UserComments from "../component/UserComments";
import UserVideos from "../component/UserVideos";
import { GetUser } from "../services/routes";
import { useEffect, useState } from "react";

export default function User(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await GetUser(JSON.parse(localStorage.getItem("user")).id);
      setUser(res);
    };
    getUserDetails();
  }, []);

  console.log(user);
  return (
    <div>
      <h1>Welcome to your base, {user.username}</h1>
      <h3>Update your posts here</h3>
      <div>
        {user.comment_list.map((e, i) => (
          <UserComments {...props} comment_list={e.comment_list} />
        ))}
      </div>
      <div>
        {user.video_list.map((e, i) => (
          <UserVideos {...props} video_list={e.video_list} />
        ))}
      </div>
    </div>
  );
}
