import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SpecVideo } from "../services/routes";

export default function PostComment(props) {
  const [comment, setComment] = useState({
    user_id: JSON.parse(localStorage.getItem("user")).id,
    video_id: props.match.params.id,
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form type="submit" onSubmit={handleSubmit}>
        <TextField
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
