import './App.css';
import app from './firebase.init';
import {
  createUserWithEmailAndPassword,
  getAuth
} from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const[user,setUser]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  // const handleEmailChange = () => {
  //   console.log('email working!!');
  // };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handlePasswordChange = () => {
  //   console.log('password working');
  // };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    console.log('form submited');
    createUserWithEmailAndPassword(auth, email, password)
      .then((result)=>{
        const user=result.user;
        console.log(user);
        setUser(user);
       
      }).catch((error)=>{
        console.error(error);
      });

    event.preventDefault();
  };

  return (
    <div className='App'>
      <div className="registration">
        <form onSubmit={handleFormSubmit}>
          <input onChange={handleEmailChange} type="email" name="email" id="" />
          <input onChange={handlePasswordChange} type="password" name="password" id="" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default App;
