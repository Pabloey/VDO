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
      <div>
        <UserComments {...props} comment_list={user.comment_list} />
      </div>
      <div>
        <UserVideos {...props} video_list={user.video_list} />
      </div>
    </div>
  );
}
