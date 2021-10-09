import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const App = () => {
  const[ user, setUser ] = useState(null);

  const padding = {
    padding: 5,
  }
  const login = () => {
    return <Link style={padding} to='/login'>login</Link>
  }
  const profile = () => {
    return <Link style={padding} to='/profile'>Profile</Link>
  }
  return (
    <div>
      <Router>
        <div>
          <Link style={padding} to='/'>home</Link>
          { user !== null ? profile() : login() }
        </div>
        <Switch>
          <Route path='/login'>
            <LoginForm setUser={setUser}/> 
          </Route>
          <Route path='/profile'>

          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
     </Router>
      
    </div>
  )
}
export default App;
