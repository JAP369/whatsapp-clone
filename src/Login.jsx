import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {
  const signIn = () => {};
  return (
    <div className='login'>
      <div className='login__container'>
        <img
            src='https://www.freepngimg.com/download/whatsapp/77102-whatsapp-computer-call-telephone-icons-png-image-high-quality.png'
          alt=''
        />
        <div className='login__text'>
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
