import React, { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const loginWithCode = useCallback(
    (code) => {
      if (user) {
        return;
      }
      axios
        .post("/login/oauth/github/token", { code })
        .then((res) => res.data.access_token)
        .then((token) =>
          axios.get("https://api.github.com/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        )
        .then((res) => setUser(res.data))
        .catch(console.error);
    },
    [user]
  );

  const logout = () => {
    setUser();
  };

  return (
    <AuthContext.Provider value={{ user, loginWithCode, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useUser() {
  return useAuth().user;
}
