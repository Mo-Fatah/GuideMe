import { useEffect, useState } from 'react'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import SearchByFilters from './components/search/SearchByFilters';
import { getByName, getAll } from './services/food';
const App = () => {
  const [ user, setUser ] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('Guideme-app-user')
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []) 

  const padding = {
    padding: 5,
  }
  const login = () => {
    return <Link style={padding} to='/login'>login</Link>
  }
  const profile = () => {
    return <Link style={padding} to='/profile'>Profile</Link>
  }
  const logout = () => {
    return <Link style={padding} to='/logout'>logout</Link>
  }

  const handleLogOut = () => {
    window.localStorage.removeItem('Guideme-app-user');
    setTimeout(() =>{ 
      setUser(null); //this gives a console warning, needs further digging for the root cause
    },0)
    history.push('/');
  }

  return (
    <div>
        <div>
          <Link style={padding} to='/'>home</Link>
          { user === null && login() }
          { user !== null && profile() }
          { user !== null && logout() }
        </div>

        <Switch>
          <Route path='/login'>
            <LoginForm setUser={setUser} /> 
          </Route>

          <Route path='/profile'>
          </Route>

          <Route path='/logout' render={() => handleLogOut()} />

          <Route path='/search'>
            <SearchByFilters />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
    </div>
  )
}
export default App;
