import React, { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Contact from "./Contact";
import Login from "./Login";
import Profile from "./Profile";
/* import User from "./User"; */

/* function App() {
  return (
    <BrowserRouter>
       
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |&nbsp;
        <Link to="/Product">Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
          
    </BrowserRouter>
  );
}

export default App; */
export const UserContext = createContext();

const users = [{ name: "A B" }, { name: "C D" }];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={users}>
      <BrowserRouter>
        <nav>
          <Link to="/">Login</Link> | <Link to="/dashboard">Dashboard</Link>
          <Link to="/contact">Contact</Link> |&nbsp;
          <Link to="/user/1">User 1</Link> |&nbsp;
          <Link to="/user/2">User 2</Link> |&nbsp;
          <Link to="/Profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/user/:id" element={<users />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
