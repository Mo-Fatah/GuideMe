import { useState } from 'react'
import { login } from '../services/login';
import { useHistory } from 'react-router';

const LoginForm = ({ setUser }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault() 
    const user = await login({username, password});
    if (user) { 
      setUser(user);
      history.push('/');
    } else {
      console.log('invalid credentials');      
    }
  }

  return (
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
  )
}

export default LoginForm;