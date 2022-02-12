import TextField from '@mui/material/TextField';
import {useState } from 'react'

export default function SignIn() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    setAccount({...account, [e.target.name]: e.target.value})
    console.log(account)
  }

  return (
    <div>
      <TextField id="outlined-basic" label="Username" variant="outlined" name="username" value={account.username} onChange={handleChange} />
      <br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={account.password} onChange={handleChange} />
    </div>
  )
}
