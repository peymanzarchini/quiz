import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import useAuth from "@/contexts/auth";

/*
 * Local Types
 */

type ProtectedRouteProps = {
  children: ReactNode;
};

/*
 * Component
 */

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.replace("/");
    }
  }, [isSignedIn, router]);

  return children;
}
