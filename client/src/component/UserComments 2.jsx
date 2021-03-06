import { useState } from "react";
import { GetUser, DeleteComment } from "../services/routes";
import EditComment from "./EditComment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
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
    console.log("hi");
    setEditOn(false);
  };

  return (
    <div className="edit-comments">
      {editOn ? (
        <div>
          <EditComment comments={props.comments} setEditOn={setEditOn} setComments={props.setComments} />
          <CancelIcon onClick={() => commentCancel()} />
        </div>
      ) : (
        <div>
          Video: {props.comments.video}
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
