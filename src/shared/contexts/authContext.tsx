"use client";

import React, { createContext, useEffect, useState } from "react";

interface AuthContextValue {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  isOpenForm: boolean;
  setIsOpenForm: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  isOpenForm: false,
  setIsOpenForm: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);

  useEffect(() => {
    isAuthenticated && setIsOpenForm(false);
  }, [isAuthenticated]);

  const value: AuthContextValue = {
    isAuthenticated,
    setIsAuthenticated,
    isOpenForm,
    setIsOpenForm,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
