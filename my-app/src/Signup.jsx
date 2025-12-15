import  { useState } from "react";


function Signup({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSignup({email, password});
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      
    </>
  );
}

export default Signup;
