"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import CTA from "@/components/ui/CTA";

/*
 * Local Types
 */

type HeaderProps = {
  className?: string;
};

/*
 * Component
 */

export default function Header({ className }: Readonly<HeaderProps>) {
  const router = useRouter();
  const email = localStorage.getItem("email");

  const handleOnLogout = () => {
    localStorage.removeItem("email");
    router.replace("/");
    window.location.reload();
  };

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between border-b-2 border-gray-300 p-4">
        <Link href="/" className={`text-2xl ${className}`}>
          Quiz
        </Link>
        {email === null && (
          <div className="flex gap-4">
            <CTA href="/login" size="small" variant="secondary">
              Login
            </CTA>
            <CTA href="/signup" size="small" variant="primary">
              Sign up
            </CTA>
          </div>
        )}
        {email !== null && (
          <Button
            type="button"
            size="small"
            variant="secondary"
            onClick={handleOnLogout}
          >
            Logout
          </Button>
        )}
      </div>
    </header>
  );
}
