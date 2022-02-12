import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SignUp() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(account)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Username" variant="outlined" name="username" value={account.username} onChange={handleChange} />
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
        <TextField
          id="outlined-basic"
          type="password"
          label="Confirm Password"
          variant="outlined"
          name="confirmPassword"
          value={account.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <Button type="submit" variant="contained">Testing</Button>
      </form>
    </div>
  );
}
