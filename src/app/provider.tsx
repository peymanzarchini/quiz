import { ReactNode } from "react";

import AuthProvider from "@/contexts/auth/AuthProvider";
import QuizProvider from "@/contexts/quiz/QuizProvider";

/*
 * Local Types
 */

type AppProviderProps = {
  children: ReactNode;
};

/*
 * Provider
 */

export default function RootProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <QuizProvider>{children}</QuizProvider>
    </AuthProvider>
  );
}
