import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FindUser } from "../services/routes";

export default function SignIn(props) {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const checkUser = async (res) => {
    if (account.username === res.username && account.password === res.password) {
      localStorage.setItem("user", JSON.stringify(res));
      props.authButton();
      props.history.push("/");
      // alert("Login successful"); //Add toast here Snackbar/Alert MUI
    } else alert("Wrong password or username"); //Add toast here Snackbar/Alert MUI
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await FindUser(account.username);
    await checkUser(res);
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
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  );
}
