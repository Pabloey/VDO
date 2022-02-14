import { DeleteVideo } from "../services/routes";
import { GetUser } from "../services/routes";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UserVideos(props) {
  const deleteVideo = async () => {
    await DeleteVideo(props.video.id);
    // console.log(props.video.id)
    const res = await GetUser(JSON.parse(localStorage.getItem("user")).id);
    props.setVideos(res.video_list);
  };
  return (
    <div>
      <div></div>
      {props.video.title}
      <DeleteIcon style={{ color: "red" }} onClick={deleteVideo}/>
    </div>
  );
}
