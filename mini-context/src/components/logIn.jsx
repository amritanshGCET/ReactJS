import React, { useContext, useState } from "react";
import Usercontext from "../context/context";

function LogIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(Usercontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username: userName, password });
  };

  return (
    <div>
      <h1>Log In Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          placeholder="Username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LogIn;
