"use client";

import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [accessToken, setAccessToken] = useState(null);

  const [isInitializing, setIsInitializing] = useState(true);

  function login(data) {
    setUser(data.user);

    setAccessToken(data.accessToken);
  }

  function logout() {
    setUser(null);

    setAccessToken(null);
  }

  const value = useMemo(
    () => ({
      user,

      accessToken,

      isInitializing,

      isAuthenticated: !!accessToken,

      login,

      logout,

      setUser,

      setAccessToken,

      setIsInitializing,
    }),

    [user, accessToken, isInitializing],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}
