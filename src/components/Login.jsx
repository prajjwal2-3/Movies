import React from "react";
import Header from "./Header";
import { useState , useRef } from 'react';
import { checkValidData} from '../utils/validation';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {  updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage , setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // validate the form data 
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // if the form is valid, then proceed with the sign in or sign up

    if(!isSignInForm){
      // sign Up Logic
      const auth = getAuth();
createUserWithEmailAndPassword(auth, email.current.value, password.current.value )
  .then((userCredential) => {
    const user = userCredential.user;
    // const auth = getAuth();
updateProfile( user, {
  displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
    navigate("/browse");
}).catch((error) => {
    setErrorMessage(error.message);
});
      console.log(user);
      navigate("/browse" )
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage( errorCode +  "-" + errorMessage);
  });

    }

    else {
      // sign In Logic
      const auth = getAuth();
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
        src = "https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg"
        alt = "logo"
        />
      </div>
      <form 
       onSubmit={(e) => e.preventDefault()}
       className= "w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className= "font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" :  "Sign Up"}</h1>
        {!isSignInForm && (<input ref = {name} type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700' />)}
        <input ref= {email} type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700' />
        <input  ref = {password} type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />
        <p className='text-red-500 font-bold '> {errorMessage}</p>
        <button className= 'p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> { isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  ); 
};

export default Login;

