import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const loginWithCode = (code) => {
    if (token) {
      return;
    }
    axios
      .post("/login/oauth/github/token", { code })
      .then((res) => res.data.access_token)
      .then((token) => {
        setToken(token);
        return axios.get("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      })
      .then((res) => setUser(res.data))
      .catch(console.log);
  };

  const logout = () => {
    setToken();
    setUser();
  };

  return (
    <AuthContext.Provider value={{ user, loginWithCode, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
