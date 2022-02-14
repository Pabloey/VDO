import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FindUser } from "../services/routes";
import { toast } from "react-toastify";

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
      console.log();
      props.authButton();
      props.history.push("/");
      toast.success("Successfully logged in!", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
      // alert("Login successful"); //Add toast here Snackbar/Alert MUI
    } else {
      toast.error("Wrong password or username?", {
        draggable: true,
        progress: 0,
      });
    }; //Add toast here Snackbar/Alert MUI
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await FindUser(account.username);
    await checkUser(res);
  };

  return (
    <div>
      <h1>Sign In</h1>
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
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  );
}
