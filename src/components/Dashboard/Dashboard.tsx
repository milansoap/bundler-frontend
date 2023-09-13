import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // if you are using react-router-dom
import { AuthContext } from '../../context/AuthProvider';
import { useAuth } from '../../hooks/UseAuth';
import WithAuth from '../../wrappers/WithAuth';

const Dashboard = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken');
    setAuth({ isAuthenticated: false });
    navigate('/login');
  };

  return (
    <div>
      Dashboard
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default WithAuth(Dashboard);
