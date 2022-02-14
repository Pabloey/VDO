import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { SubmitVideo } from "../services/routes";

export default function UploadVideo() {
  const [videoInput, setVideoInput] = useState({
    title: "",
    description: "",
    video_url: "",
    user_id: JSON.parse(localStorage.getItem("user")).id,
  });

  const handleChange = (e) => {
    setVideoInput({ ...videoInput, [e.target.name]: e.target.value });
    console.log(videoInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await SubmitVideo(videoInput);
    setVideoInput({
      title: "",
      description: "",
      video_url: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Title" variant="outlined" name="title" value={videoInput.title} onChange={handleChange} />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          value={videoInput.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField id="outlined-basic" label="URL" variant="outlined" name="video_url" value={videoInput.video_url} onChange={handleChange} />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  );
}
