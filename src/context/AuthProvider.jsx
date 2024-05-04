import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { account } from "../lib/appwrite/config";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      setIsLoading(true);

      const currentUser = await account.get();

      if (currentUser) {
        setUser(currentUser);
        setIsAuthenticated(true);
        setIsLoading(false);
        return true;
      }

      setIsLoading(false);
      return false;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("cookieFallback") === "[]" ||
      localStorage.getItem("cookieFallback") === null
    ) {
      navigate("/log-in");
    } else {
      checkAuth();
    }
  }, []);

  const value = {
    user,
    isAuthenticated,
    setIsAuthenticated,
    isLoading,
    checkAuth,
  };

  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(Authcontext);

export default AuthProvider;
