import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { CreateUser } from "../services/routes";

export default function SignUp() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await CreateUser({ username: account.username, password: account.password });
    if (account.password === account.confirmPassword) {
      setAccount({ username: "", password: "", confirmPassword: "" });
      alert("Thanks for signing up, now you can login"); //Add toast here Snackbar/Alert MUI
    } else alert("Password's don't match, try again"); //Add toast here Snackbar/Alert MUI
  };

  return (
    <div>
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
      <Button onClick={handleSubmit} type="submit" variant="contained">
        Sign Up
      </Button>
    </div>
  );
}
