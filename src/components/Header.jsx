import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  const handleSignOut = () => {
    const auth = getAuth();
signOut(auth).then(() => {
  navigate("/");
})
.catch(() => {
    navigate("/error");
});
  }
  return (
    <div className='absolute w-screen px-8 py bg-gradient-to-b from to-black z-10 flex justify-between'>
      <img 
      className='w-44'
      src= " https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt = "logo"
      />
      <div className='flex p-2'>
        <img 
        className='w-12 h-12'
        alt = "user icon"
        src = "https://www.google.com/imgres?q=netflix%20user%20icon%20image&imgurl=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fnetflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg&imgrefurl=https%3A%2F%2Fwallpapers.com%2Fnetflix-profile-pictures&docid=mP1fs-f48JPRJM&tbnid=LPGY0rKiC4oMCM&vet=12ahUKEwjKxfPHkOmNAxWn4DgGHdcMN-QQM3oECBwQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwjKxfPHkOmNAxWn4DgGHdcMN-QQM3oECBwQAA"
         />
         <button onClick={handleSignOut} className='font-bold text-white'> Sign Out </button>
      </div>
    </div>
  );
};

export default Header;