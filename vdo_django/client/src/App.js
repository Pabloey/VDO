import './App.css';
import { useState } from 'react'
import Button from '@mui/material/Button'
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
      <p>hi</p>
      <Button onClick={() => authButton()} variant="contained">Testing</Button>

      {auth ? <LoggedIn /> : <LoggedOut />}
      <a href="youtube.com" ><div>
        <ReactPlayer controls='false' url='https://vimeo.com/76979871' playing="true" />
      </div>
      </a>
      <ReactPlayer controls='false' url='https://vimeo.com/76979871' playing="false" />
    </div>
  );
}

export default App;
