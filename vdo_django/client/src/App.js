import './App.css';
import { useState } from 'react'
import Button from '@mui/material/Button'
import Drawer from './component/Drawer'
import ReactPlayer from 'react-player'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import { Route, Switch } from 'react-router-dom'

function App () {

  const [auth, setAuth] = useState(false)

  const authButton = () => {
    if (!auth) setAuth(true)
    else setAuth(false)
  }


  return (
    <div className="App">
      <Drawer />
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />}></Route>
        <Route exact path="/login" component={(props) => <LogIn {...props} authButton={authButton} />}></Route>
        {/* <Route exact path="/" component={Home}></Route> */}
      </Switch>
      {/* <Button onClick={() => authButton()} variant="contained">Testing</Button> */}
      {/* {auth ? <LogIn /> : <LoggedOut />} */}
    </div>
  );
}

export default App;
