import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function PostComment(props) {
  const [comment, setComment] = useState({
    user_id: JSON.parse(localStorage.getItem("user")).id,
    video_id: props.match.params.id,
    description: "",
  });



  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
    console.log(comment)
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Leave a comment"
        variant="standard"
        name="description"
        value={comment.description}
        onChange={handleChange}
      />
    </div>
  );
}
