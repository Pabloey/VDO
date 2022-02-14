import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { CreateUser } from "../services/routes";
import { toast } from "react-toastify";


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
      toast.success('Signup successful! Now trying logging in.');
    } else toast.error('Make sure passwords match!');
  };

  return (
    <div className="sign-up-half">
      <h1>Sign Up</h1>
      <br />
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
        <br />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
