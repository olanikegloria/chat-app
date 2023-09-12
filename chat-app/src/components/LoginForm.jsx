import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
       'Project-ID':"6e9b1853-1fb9-4045-9af7-35370e1d000a",
       'User-Name':username,
        'User-Secret':password
    }

    try{
        await axios.get('https://api.chatengine.io/chats', {headers: authObject});

        localStorage.setItem('username', username);
        localStorage.getItem('password', password);

        window.location.reload();

    }catch(error){
       setError('oops, incorrect credentials')
    }

  }

  return (
     <div className="wrapper">
        <div className="form">
            <h1 className="title">
                Chat Application
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="input" 
                placeholder="username"
                required/>
                <input type="text" value={password} 
                onChange={(e) => setpassword(e.target.value)}
                className="input" 
                placeholder="password"
                required/>
                <div align="center">
                  <button type="submit" className="button">
                    <span>Start chatting</span>
                  </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
     </div>
  )
}

export default LoginForm
