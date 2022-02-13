import './App.css';
import { useState } from 'react'
import Button from '@mui/material/Button'
import Drawer from './component/Drawer'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
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
      <Drawer />
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />}></Route>
        <Route exact path="/login" component={(props) => <LogIn {...props} authButton={authButton} />}></Route>
      </Switch>
      {/* {auth ? <LogIn /> : <LoggedOut />} */}
    </div>
  );
}

export default App;
