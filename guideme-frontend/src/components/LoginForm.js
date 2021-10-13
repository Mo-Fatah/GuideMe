import { useState } from 'react'
import { login } from '../services/login';
import { useHistory } from 'react-router';
import Notification from './Notification';

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
      <br/>  
      <Notification message={notification}/>
      <br/>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input 
            value={username}
            onChange={ ({target}) => {setUsername(target.value)} }
          />
        </div>
        <div>
          password
          <input 
            value={password}
            onChange={ ({target}) => setPassword(target.value) } 
          />
        </div> 
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default LoginForm;