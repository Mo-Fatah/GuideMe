import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createNew } from "../services/user";
import { TextField, Button, Typography } from "@mui/material";
const CreateNewAccount = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');
  const history = useHistory();
  const handleSubmission = async (event) => {

    event.preventDefault();
    if (username.length < 4) {
      setMessage('username should be 4 characters minimum');
      return;
    }
    if (password.length < 5) {
      setMessage('password should be 5 characters minimum');
      return;
    }
    const result = await createNew({ username, password });
    if (result.error) {
      setMessage('username already taken, please try a new one');
      return;
    }
    setMessage('Great, Welcome aboard!');
    setTimeout(() => {
      history.push('/login');
    }, 2000);
  }

  return (
    <div>
      {message}
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
      <Typography variant='h2' sx={{marginBottom:3}}>
        Create New Account
      </Typography>
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