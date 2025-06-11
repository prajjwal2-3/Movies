import React from 'react'
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom'; 
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
           {
            path: "browse",
            element: <Browse/>,
        },

    ])

    useEffect(() => {
      const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const { uid , email , displayName, photoURL } = user;
    dispatch(addUser ({
      uid,
      email,
      displayName,
      photoURL, 
    }))
  } else {
    dispatch(removeUser());
    
  }
});

}, [dispatch]);
  return (
    <div> 
        <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;