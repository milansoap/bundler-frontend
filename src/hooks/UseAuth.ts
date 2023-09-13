import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

// useAuth.js
export const useAuth = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);
    const token = localStorage.getItem('authToken');
  
    useEffect(() => {
      if (token) {
        setAuth({ isAuthenticated: true });
      } else {
        setAuth({ isAuthenticated: false });
      }
      setLoading(false);
    }, [token]);  // dependency on the token, will update auth state if token changes
  
    return { auth, setAuth,isLoading  };
  };
  