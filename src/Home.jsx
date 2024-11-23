import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* function Home() {
  return <h1>Home Page</h1>;
}
export default Home;
 */

function Home() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") ?? " "
  );
  const navigate = useNavigate();
  const handleLogin = () => {
    if (username === "admin") {
      localStorage.removeItem("username");
      navigate("/dashboard"); /* เปลี่ยนหน้า */
    } else {
      localStorage.setItem("username", " ");
      alert("Invalid username! Try again.");
      setUsername("");
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Home;
