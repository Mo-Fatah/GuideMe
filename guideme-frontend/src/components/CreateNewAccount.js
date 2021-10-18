import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createNew } from "../services/user";
import { TextField, Button, Typography, Alert } from "@mui/material";
const CreateNewAccount = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState(null);
  const [ success, setSuccess ] = useState(false);
  const history = useHistory();
  const handleSubmission = async (event) => {
    setError(null);
    setSuccess(false);
    event.preventDefault(); 
    if (username.length < 4) {
      setError('username should be 4 characters minimum');
      return;
    }
    if (password.length < 5) {
      setError('password should be 5 characters minimum');
      return;
    }
    const result = await createNew({ username, password });
    if (result.error) {
      setError('username already taken, please try a new one');
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      history.push('/login');
    }, 2500);
  }

  return (
    <div>
      <Typography variant='h2' >
        Create New Account
      </Typography>
      { success ?
        <Alert severity='success' style={{marginBottom: 15}}>
          Great, Welcome aboard! Redirecting to login page ...
        </Alert>
        : null
      }
      { error ?
        <Alert severity='error' style={{marginBottom: 15}}>
          {error}
        </Alert> 
        : null
      }
      <NewAccountForm username = {username} 
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handler={handleSubmission}
      /> 
    </div>
 )
}

const NewAccountForm = ({ username, password, setUsername, setPassword, handler }) => {
  return (
    <div>
      <form onSubmit = {handler}>
        <TextField 
          label='username (4 characters min.)'
          value={username}
          variant='outlined'
          onChange= {({target}) => setUsername(target.value)}
        /> 
        <TextField 
          label='password (5 characters min.)'
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
          create
        </Button>

      </form>
    </div>
  )
}

export default CreateNewAccount;