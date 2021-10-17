import { useState } from 'react'
import { login } from '../services/login';
import { useHistory } from 'react-router';
import Notification from './Notification';
import { TextField, Button, Typography } from '@mui/material';

const LoginForm = ({ setUser }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ notification, setNotification ] = useState(null);

  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault() 
    try { 
      const user = await login({username, password});
      setUser(user);
      window.localStorage.setItem('Guideme-app-user', JSON.stringify(user));
      history.push('/');
    } catch (error) {
      setNotification("invalid credentials")
      setTimeout(() => {
        setNotification(null)
      },2000)
    }
  }

  return (
    <div>
      <Typography variant='h2' sx={{marginBottom:2}}>
        Login
      </Typography>
      <br/>  
      <Notification message={notification}/>
      <br/>
      <form onSubmit={handleLogin}>
        <TextField 
          label='username'
          value={username}
          variant='outlined'
          onChange= {({target}) => setUsername(target.value)}
        /> 
        <TextField 
          label='password'
          value={password}
          variant='outlined'
          onChange= {({target}) => setPassword(target.value)}
        />
        <br/> 
        <Button type='submit'
          color='success'
          variant='contained'
          sx={{marginTop:2}} 
        >
          login
        </Button>
</form>
    </div>
  )
}

export default LoginForm;