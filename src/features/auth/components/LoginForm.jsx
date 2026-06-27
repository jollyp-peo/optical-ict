"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import InputField from "@/components/forms/InputField";

import { loginSchema } from "../validation/login.schema";
import { useLogin } from "../hooks/useLogin";
import { useAuth } from "../context/AuthContext";

export default function LoginForm() {
  const router = useRouter();

  const login = useLogin();

  const { login: loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    login.mutate(values, {
      onSuccess: (data) => {
        loginUser(data);

        router.replace("/admin/dashboard");
      },
    });
  };

  return (
    <Card className="w-full max-w-md p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Admin Login</h1>

        <p className="mt-2 text-slate-500">
          Sign in to access the Optimal ICT dashboard.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          label="Username or Phone"
          placeholder="Enter username or phone"
          error={errors.identifier?.message}
          {...register("identifier")}
        />

        <InputField
          type="password"
          label="Password"
          placeholder="Enter password"
          error={errors.password?.message}
          {...register("password")}
        />

        {login.isError && (
          <p className="text-sm text-red-600">
            {login.error?.response?.data?.message ??
              "Login failed. Please try again."}
          </p>
        )}

        <Button type="submit" fullWidth loading={login.isPending}>
          Sign In
        </Button>
      </form>
    </Card>
  );
}
