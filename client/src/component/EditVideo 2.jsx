import PublishIcon from "@mui/icons-material/Publish";
import TextField from "@mui/material/TextField";
import { EditVideoDetails, GetUser } from "../services/routes";
import { useState } from "react";
import { toast } from "react-toastify";

export default function EditVideo(props) {
  const [videoDetail, setVideoDetail] = useState({
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
    setVideoDetail({ ...videoDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Changes made successfully")
    await EditVideoDetails(videoDetail);
    props.setEditOn(false);
    const res = await GetUser(JSON.parse(localStorage.getItem("user")).id);
    props.setVideos(res.video_list);
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
          value={videoDetail.title}
          onChange={handleChange}
          style={{ width: "75%" }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Description"
          multiline
          maxRows={10}
          variant="outlined"
          name="description"
          value={videoDetail.description}
          onChange={handleChange}
          style={{ width: "75%" }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Video URL"
          variant="outlined"
          name="video_url"
          value={videoDetail.video_url}
          onChange={handleChange}
          style={{ width: "75%" }}
        />
        <br />
        <br />
        <PublishIcon onClick={handleSubmit} type="submit" />
      </form>
    </div>
  );
}
