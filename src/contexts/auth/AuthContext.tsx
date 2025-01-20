"use client";

import { createContext } from "react";

/*
 * Local Types
 */

type AuthContextType = {
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
};

/*
 * Context
 */

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
