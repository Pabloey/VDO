import PublishIcon from "@mui/icons-material/Publish";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function EditComment() {
  const [commentField, setCommentField] = useState({});

  const handleChange = (e) => {
    setCommentField({ ...commentField, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log('testing submit')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Username" variant="outlined" name="username" value={account.username} onChange={handleChange} />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          value={account.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <PublishIcon />
      </form>
    </div>
  );
}
