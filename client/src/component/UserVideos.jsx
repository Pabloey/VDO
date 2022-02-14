import { DeleteVideo, GetUser } from "../services/routes";
import EditVideo from "./EditVideo";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserVideos(props) {
  const [editOn, setEditOn] = useState(false);

  const deleteVideo = async () => {
    await DeleteVideo(props.video.id);
    const res = await GetUser(JSON.parse(localStorage.getItem("user")).id);
    props.setVideos(res.video_list);
    toast.error("Video was deleted!");
  };

  const cancelVideo = () => {
    toast("No changes were made");
    setEditOn(false);
  };

  return (
    <div className="edit-videos">
      {editOn ? (
        <div>
          <EditVideo video={props.video} setEditOn={setEditOn} setVideos={props.setVideos} />
          <CancelIcon onClick={() => cancelVideo()} setEditOn={setEditOn} />
        </div>
      ) : (
        <div>
          <Link to={`/videos/${props.video.id}`} style={{ textDecoration: "none", color: "black" }}>
            {props.video.title}
          </Link>
          <DeleteIcon style={{ color: "red" }} onClick={deleteVideo} />
          <EditIcon style={{ color: "green" }} onClick={() => setEditOn(true)} />
        </div>
      )}
    </div>
  );
}
