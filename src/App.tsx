import React, { useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { AuthContext } from "./context/AuthProvider";
import { useAuth } from "./hooks/UseAuth";

function App() {
  const { auth, setAuth } = useAuth(); // use custom hook

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      console.log(token);
      setAuth({
        isAuthenticated: true,
        user: auth.user,
      });
      console.log(auth);
    } else {
      setAuth({
        isAuthenticated: false,
        user: auth.user,
      });
    }
  }, []);

  useEffect(() => {
    console.log("Updated auth state: ", auth);
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
