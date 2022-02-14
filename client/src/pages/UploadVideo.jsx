import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function UploadVideo() {
  const [videoInput, setVideoInput] = useState({
    title: "",
    description: "",
    video_url: "",
    user_id: "",
  });

  const handleChange = (e) => {
    setVideoInput({ ...videoInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Title" variant="outlined" name="username" value={videoInput.title} onChange={handleChange} />
        <br />
        <br />
        <TextField id="outlined-basic" label="Description" variant="outlined" name="password" value={videoInput.description} onChange={handleChange} />
        <br />
        <br />
        <TextField id="outlined-basic" label="URL" variant="outlined" name="password" value={videoInput.video_url} onChange={handleChange} />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  );
}
