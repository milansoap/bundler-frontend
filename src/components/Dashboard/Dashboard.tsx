import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // if you are using react-router-dom
import { AuthContext } from '../../context/AuthProvider';

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/login");  // Redirect to login
    }
  }, [auth, navigate]);

  return (
    <div>Dashboard</div>
  );
}

export default Dashboard;
