import { ComponentPropsWithoutRef, ReactNode } from "react";

/*
 * Local Types
 */

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
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

export default function Button({
  children,
  size,
  variant,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      {...props}
      className={`rounded border-2 border-black disabled:bg-transparent disabled:text-black ${sizeClassName[size]} ${variantClassName[variant]}`}
    >
      {children}
    </button>
  );
}
