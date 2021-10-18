import { useEffect, useState } from 'react'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@mui/material';
import LoginForm from './components/LoginForm';
import Footer from './components/Layout/Footer';
import Home from './components/Home';
import SearchByFilters from './components/search/SearchByFilters';
import RestaurantView from './components/restaurant/RestaurantView';
import AddNewRest from './components/restaurant/AddNewRest';
import CreateNewAccount from './components/CreateNewAccount';
import Layout from './components/Layout/Layout';

const App = () => {
  const [ user, setUser ] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('Guideme-app-user')
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []) 

  const login = () => {
    return (
      <Button color='inherit' component={Link} to='/login'>
        login
      </Button>
    )
  }
 
  const logout = () => {
    return (
      <Button color='inherit' component={Link} to='/logout'>
        logout
      </Button>
    )
  }
  const signup = () => {
    
    return (
      <Button color='inherit' 
        component={Link} 
        to='/signup' 
        style={{background:'#0E9E30', paddingLeft:15}} 
      >
        New Account
      </Button>
    )
  }

  const handleLogOut = () => {
    window.localStorage.removeItem('Guideme-app-user');
    setTimeout(() =>{ 
      setUser(null); //this issues a console warning, needs further digging for the root cause
    },0)
    history.push('/');
  }

  return (
    <div>
        <Layout>
          <AppBar
            position='sticky'
            style= {{marginBottom:10}}
          >
            <Toolbar>
              <Button color ='inherit'component={Link} to='/'>
                Home
              </Button>
              { user === null && login() }
              { user === null && signup()}
              { user !== null && logout() }          
            </Toolbar>
          </AppBar>

          <Switch>
            <Route path='/login'>
              <LoginForm setUser={setUser} /> 
            </Route>
            <Route path='/food/:id'>
              <RestaurantView />
            </Route>

            <Route path='/new-restaurant'>
              <AddNewRest/>
            </Route>
            <Route path='/signup'>
              <CreateNewAccount />
            </Route> 
            <Route path='/search'>
              <SearchByFilters />
            </Route>
            <Route path='/logout' render={() => handleLogOut()} />
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
          <Footer/>
        </Layout>
    </div>
  )
}
export default App;
