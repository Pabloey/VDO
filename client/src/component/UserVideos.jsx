import { DeleteVideo } from "../services/routes";
import { GetUser } from "../services/routes";
import EditVideo from "./EditVideo";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

export default function UserVideos(props) {
  const [editOn, setEditOn] = useState(false);

  const deleteVideo = async () => {
    await DeleteVideo(props.video.id);
    const res = await GetUser(JSON.parse(localStorage.getItem("user")).id);
    props.setVideos(res.video_list);
  };

  return (
    <>
      {editOn ? (
        <div>
          <EditVideo video={props.video} />
          <CancelIcon onClick={() => setEditOn(false)} />
        </div>
      ) : (
        <div>
          {props.video.title}
          <DeleteIcon style={{ color: "red" }} onClick={deleteVideo} />
          <EditIcon style={{ color: "green" }} onClick={() => setEditOn(true)} />
        </div>
      )}
    </>
  );
}
