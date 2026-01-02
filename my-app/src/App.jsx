import React, { useState } from "react";
import Signup from './Signup';
import Login from './Login';
// import "./style.css";

export default function App() {
   const[users,setUsers] = useState([]);
   const[loginUser, setLoginUser] = useState(null);
   
   const handleSignup = (newUser) => {
     console.log([...users, newUser]);
     setUsers([...users, newUser]);
   }

   const handleLogin = ({ loginUser  }) => {
     const foundUser = users.find(
      (u) => u.email === loginUser.email && u.password === loginUser.password
     );
     if (foundUser) {
       console.log(foundUser);
      setLoginUser(foundUser);
      alert("Login successful!");
    } else {
      alert("Invalid credentials!");
    }
   };

  return(
    <>
      <Signup onSignup={handleSignup} />
      <Login onLogin ={handleLogin}/>
    </>
  );
}
