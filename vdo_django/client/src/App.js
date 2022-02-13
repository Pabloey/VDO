import './App.css';
import { useState } from 'react'
import Button from '@mui/material/Button'
import Drawer from './component/Drawer'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'
import Upload from './pages/UploadVideo'
import { Route, Switch } from 'react-router-dom'

function App () {
  const [auth, setAuth] = useState(false)
  const authButton = () => {
    if (!auth) {
      setAuth(true)
    }
    else setAuth(false)
  }


  return (
    <div className="App">
      {/* {(props) => <Drawer {...props} />} */}
      <Drawer />
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />}></Route>
        <Route exact path="/login" component={(props) => <LogIn {...props} authButton={authButton} />}></Route>
        <Route exact path="/videos/:id" component={(props) => <VideoPage {...props} />}></Route>
        <Route exact path="/upload" component={(props) => <Upload {...props} />}> </Route>
      </Switch>
    </div>
  );
}

export default App;
