import { useState } from "react";
import { GetUser, DeleteComment } from "../services/routes";
import EditComment from "./EditComment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserComments(props) {
  const [editOn, setEditOn] = useState(false);

  const deleteComment = async () => {
    await DeleteComment(props.comments.id);
    const res = await GetUser(JSON.parse(localStorage.getItem("user")).id);
    props.setComments(res.comment_list);
    toast.error("Comment deleted!");
  };

  const commentCancel = () => {
    toast("No changes were made");
    setEditOn(false);
  };

  console.log(props.comments)

  return (
    <div className="edit-comments">
      {editOn ? (
        <div>
          <EditComment comments={props.comments} setEditOn={setEditOn} setComments={props.setComments} />
          <CancelIcon onClick={() => commentCancel()} />
        </div>
      ) : (
        <div>
          Video:
          <Link to={`/videos/${props.comments.video_id}`} style={{ textDecoration: "none", color: "black" }}>
            {props.comments.video}
          </Link>
          <br />
          Comment: {props.comments.description}
          <br />
          <DeleteIcon style={{ color: "red" }} onClick={() => deleteComment()} />
          <EditIcon style={{ color: "green" }} onClick={() => setEditOn(true)} />
        </div>
      )}
    </div>
  );
}
