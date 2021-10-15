import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createNew } from "../services/user";

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
    }, 1000);
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
    <form onSubmit = {handler}>
      <div>
        username (4 characters min.) 
        <input 
          value = {username}
          onChange = { ({target}) => setUsername(target.value) }
        />
      </div>
      <div>
        password (5 characters min.)
        <input 
          value = {password}
          onChange = { ({target}) => setPassword(target.value) }
        />
      </div>
      <button type = 'submit'>create</button>
    </form>
  )
}

export default CreateNewAccount;