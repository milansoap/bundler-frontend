import React, { useEffect, FC, ReactElement } from 'react';
import { useAuth } from '../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const WithAuth: (WrappedComponent: FC) => FC = (WrappedComponent) => {
  const WrappedWithAuth: FC = () => {
    
    const { auth, isLoading, setAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoading) {
        if (!auth.isAuthenticated) {
          navigate("/login");
        }
      }
    }, [isLoading, auth, navigate]);

    return (
      <>
        <WrappedComponent />
      </>
    );
  };
  
  return WrappedWithAuth;
};

export default WithAuth;
