"use client";

import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    if (typeof window !== "undefined")
      localStorage.setItem("email", data.email);
    router.replace("/");
    window.location.reload();
  };

  return (
    <section className="h-full">
      <div className="container mx-auto flex h-full items-center justify-center">
        <form
          className="flex w-full max-w-96 flex-col gap-8 rounded bg-gray-300 p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-center text-2xl font-bold">Sign up</h2>

          {/* Username */}
          <div className="flex flex-col gap-2">
            <TextField
              type="text"
              id="username"
              label="Username *"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500">{`${errors.username.message}`}</p>
            )}
          </div>

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
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>

          {/* Confirm password */}
          <div className="flex flex-col gap-2">
            <TextField
              type="password"
              id="confirm-password"
              label="Confirm password *"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            size="medium"
            variant="primary"
          >
            Sign up
          </Button>
        </form>
      </div>
    </section>
  );
}
