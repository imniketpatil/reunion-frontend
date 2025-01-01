import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../hooks/useDataFetchAndMutate.js";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading, isError, error } = useLoginMutation();

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="dark">
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Reunion Task Manager
        </h1>
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-6 text-center">
            Sign in to your account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="outlined-email-input"
              label="Enter Username"
              type="text"
              variant="outlined"
              fullWidth
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              id="outlined-password-input"
              label="Enter Password"
              type="password"
              variant="outlined"
              fullWidth
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              disabled={isLoading}
              className={`flex items-center justify-center ${
                isLoading ? "cursor-not-allowed opacity-75" : ""
              }`}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 100 8h4a8 8 0 01-8-8z"
                  ></path>
                </svg>
              ) : (
                "Sign in"
              )}
            </Button>
            {isError && (
              <p className="text-sm text-red-500 text-center mt-2">
                {isError.message || "Login failed. Please try again."}
              </p>
            )}
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
