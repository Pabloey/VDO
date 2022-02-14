import PublishIcon from "@mui/icons-material/Publish";
import TextField from "@mui/material/TextField";
import { EditVideoDetails } from "../services/routes";
import { useState } from "react";

export default function EditVideo(props) {
  const [commentField, setCommentField] = useState({
    id: props.video.id,
    title: props.video.title,
    description: props.video.description,
    date_time: props.video.date_time,
    video_url: props.video.video_url,
    user: props.video.user,
    user_id: props.video.user_id,
    comments: props.video.comments,
  });

  const handleChange = (e) => {
    setCommentField({ ...commentField, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EditVideoDetails(commentField);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          multiline
          maxRows={2}
          label="Title"
          variant="outlined"
          name="title"
          value={commentField.title}
          onChange={handleChange}
          style={{ width: "500px" }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label={props.video.description}
          multiline
          maxRows={10}
          variant="outlined"
          name="description"
          value={commentField.description}
          onChange={handleChange}
          style={{ width: "500px" }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label={props.video.video_url}
          variant="outlined"
          name="video_url"
          value={commentField.video_url}
          onChange={handleChange}
          style={{ width: "500px" }}
        />
        <br />
        <br />
        <PublishIcon onClick={handleSubmit} type="submit" />
      </form>
    </div>
  );
}
