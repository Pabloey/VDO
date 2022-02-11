import './App.css';
import { useState } from 'react'
import Button from '@mui/material/Button'
import NavBar from './component/NavBar'
import ReactPlayer from 'react-player'
import LoggedIn from './component/LoggedIn'
import LoggedOut from './component/LoggedOut'

function App () {

  const [auth, setAuth] = useState(false)

  const authButton = () => {
    if (!auth) setAuth(true)
    else setAuth(false)
  }

  const pages = ['page1', 'page2', 'page3', 'page4', 'page5']


  return (
    <div className="App">
      <NavBar/>
      <Button onClick={() => authButton()} variant="contained">Testing</Button>
      {auth ? <LoggedIn /> : <LoggedOut />}
    </div>
  );
}

export default App;
