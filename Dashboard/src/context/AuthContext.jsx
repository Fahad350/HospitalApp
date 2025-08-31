import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const role = localStorage.getItem("role") || "admin"; // ✅ handle both admin/patient
        let endpoint =
          role === "admin"
            ? "/api/v1/user/admin/me"
            : "/api/v1/user/patient/me";

        const { data } = await axios.get(`http://localhost:4000${endpoint}`, {
          withCredentials: true,
        });

        setIsAuthenticated(true);
        setUser(data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
