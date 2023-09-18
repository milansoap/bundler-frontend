import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import UserService from "../services/UserService";

// useAuth.js
export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(true);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          console.log("TU SAM TRENUTNO ");
          // Assuming UserService.getCurrentUser() returns a Promise
          const user = await UserService.getCurrentUser();
          setAuth({ isAuthenticated: true, user: user || null });
        } catch (e) {
          console.error("Failed to fetch user", e);
          setAuth({ isAuthenticated: false, user: null });
        }
      } else {
        setAuth({ isAuthenticated: false, user: null });
      }
      setLoading(false);
    };

    fetchUser();
  }, [token]);

  return { auth, setAuth, isLoading };
};
