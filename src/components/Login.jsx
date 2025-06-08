import React from 'react'
import Header from "./Header";
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
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
      <form className= "w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className= "font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" :  "Sign Up"}</h1>
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700' />)}
        <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700' />
        <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />
        <button className= 'p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> { isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  ); 
};

export default Login;