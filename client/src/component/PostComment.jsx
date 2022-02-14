import { useState } from "react";
import TextField from "@mui/material/TextField";
import { SpecVideo, SubmitComment } from "../services/routes";
import { toast } from "react-toastify";

export default function PostComment(props) {
  const userId = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).id : null;
  const [comment, setComment] = useState({
    user_id: userId,
    video_id: props.match.params.id,
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Comment posted");
    await SubmitComment(comment);
    const res = await SpecVideo(props.match.params.id);
    props.setVideoComments(res.comments.reverse());
    setComment({ ...comment, description: "" });
  };

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form type="submit" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Leave a comment"
          variant="standard"
          name="description"
          value={comment.description}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
