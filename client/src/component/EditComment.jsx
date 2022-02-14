import PublishIcon from "@mui/icons-material/Publish";
import TextField from "@mui/material/TextField";
import { EditCommentDetail, GetUser } from "../services/routes";
import { useState } from "react";

export default function EditComment(props) {
  const [commentField, setCommentField] = useState({
    id: props.comments.id,
    user: props.comments.user,
    user_id: props.comments.user_id,
    video: props.comments.video,
    video_id: props.comments.video_id,
    description: props.comments.description,
  });

  const handleChange = (e) => {
    setCommentField({ ...commentField, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await EditCommentDetail(commentField);
    await props.setEditOn(false);
    const res = await GetUser(JSON.parse(localStorage.getItem("user")).id);
    props.setComments(res.comment_list);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ width: "75%" }}
          id="outlined-basic"
          multiline
          maxRows={2}
          label="Comment"
          variant="outlined"
          name="description"
          value={commentField.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <PublishIcon onClick={handleSubmit} type="submit" />
      </form>
    </div>
  );
}
