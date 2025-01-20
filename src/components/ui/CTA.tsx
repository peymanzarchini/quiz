import Link from "next/link";
import { ReactNode } from "react";

/*
 * Local Types
 */

type CTAProps = {
  children: ReactNode;
  href: "/" | "/login" | "/signup" | "/quiz" | "/result";
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary";
};

/*
 * Constants
 */

const sizeClassName = {
  small: "px-4 py-1",
  medium: "px-6 py-2",
  large: "px-8 py-3",
};

const variantClassName = {
  primary: "bg-black text-white hover:bg-white hover:text-black",
  secondary: "bg-white text-black hover:bg-black hover:text-white",
};

/*
 * Component
 */

export default function CTA({
  children,
  href,
  size,
  variant,
}: Readonly<CTAProps>) {
  return (
    <Link
      href={href}
      className={`rounded border-2 border-black ${sizeClassName[size]} ${variantClassName[variant]}`}
    >
      {children}
    </Link>
  );
}
