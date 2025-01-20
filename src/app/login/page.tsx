"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

/*
 * Constants
 */

const testData = {
  email: "test@test.com",
  password: "test",
};

/*
 * Component
 */

export default function Login() {
  const [error, setError] = useState("");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    if (data.email === testData.email && data.password === testData.password) {
      if (typeof window !== "undefined")
        localStorage.setItem("email", data.email);
      router.replace("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto flex h-full items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-96 flex-col gap-8 rounded bg-gray-300 p-8"
        >
          <h2 className="text-center text-2xl font-bold">Login</h2>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <TextField
              type="email"
              id="email"
              label="Email *"
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  value.includes("@") || "Invalid email address",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <TextField
              type="password"
              id="password"
              label="Password *"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            size="medium"
            variant="primary"
          >
            Login
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </section>
  );
}
