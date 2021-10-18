import { useState } from 'react'
import { login } from '../services/login';
import { useHistory } from 'react-router';
import Notification from './Notification';
import { TextField, Button, Typography, Alert } from '@mui/material';

const LoginForm = ({ setUser }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState(null);
  const [ success, setSuccess ] = useState(false);

  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault() 
    setError(null);
    setSuccess(false);
    try { 
      const user = await login({username, password});
      setUser(user);
      window.localStorage.setItem('Guideme-app-user', JSON.stringify(user));
      setSuccess(true);
      setTimeout(() => {
        history.push('/');
      }, 2000)
    } catch (error) {
      setError('invalid credentials');
    }
  }

  return (
    <div>
      <Typography variant='h2' sx={{marginBottom:2}}>
        Login
      </Typography>

      { error ?
        <Alert severity='error' style={{marginBottom:7}}>
          {error}
        </Alert>
        : null
      }

      { success ?
        <Alert severity='success' style={{marginBottom: 7}}>
          successfull login, redirecting to Home
        </Alert>  
        : null
      }

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