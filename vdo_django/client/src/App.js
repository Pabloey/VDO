import './App.css';
import { useState } from 'react'
import Button from '@mui/material/Button'
import Drawer from './component/Drawer'
import ReactPlayer from 'react-player'
import LoggedIn from './component/LoggedIn'
import LoggedOut from './component/LoggedOut'

function App () {

  const [auth, setAuth] = useState(false)

  const authButton = () => {
    if (!auth) setAuth(true)
    else setAuth(false)
  }


  return (
    <div className="App">
      <Drawer />
      <Button onClick={() => authButton()} variant="contained">Testing</Button>
      {auth ? <LoggedIn /> : <LoggedOut />}
    </div>
  );
}

export default App;
