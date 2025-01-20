"use client";

import { ReactNode, useState } from "react";

import AuthContext from "./AuthContext";

/*
 * Local Types
 */

type AuthProviderProps = {
  children: ReactNode;
};

/*
 * Provider
 */

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isSignedIn, setIsSignedIn] = useState(!!localStorage.getItem("email"));

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
