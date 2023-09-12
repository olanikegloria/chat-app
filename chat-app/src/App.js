import { ChatEngine } from 'react-chat-engine';

import './App.css';

import React from 'react'

import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {
  if(!localStorage.getItem('username'))  return <LoginForm />
  return (
    <ChatEngine
       height="100vh"
       projectID="
       6e9b1853-1fb9-4045-9af7-35370e1d000a"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps}/>}
     />
  )
}

export default App
