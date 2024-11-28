import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGenericMutation } from "../hooks/useGenericMutation.js";
import { useGenericQuery } from "../hooks/useGenericQuery.js";
import { useNavigate } from "react-router-dom";
import { client_url } from "../utils/configUrl.js";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate, status, error } = useGenericMutation(
    `${client_url}/users/login`,
    "POST"
  );

  const onSubmit = (data) => {
    // mutate(data);
    mutate(data, {
      onSuccess: (responseData) => {
        localStorage.setItem("accessToken", responseData.accessToken);
      },
      onError: (error) => {
        console.error("Login failed:", error);
      },
    });
  };

  if (status === "success") navigate("/");
  return (
    <div className="dark">
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center ">
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
              type="username"
              variant="outlined"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Border color when focused
                    boxShadow: "0px 0px 4px rgba(0, 123, 255, 0.6)", // Add subtle shadow
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white", // Default label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Label color when focused
                },
                "& .MuiInputBase-input": {
                  color: "white", // Text color
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "gray", // Placeholder color
                },
                backgroundColor: "#374151", // Input background color
                borderRadius: "5px", // Rounded corners
              }}
              {...register("email", { required: "Email is required" })}
            />
            <TextField
              id="outlined-password-input"
              label="Enter Password"
              type="password"
              variant="outlined"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray", // Border color when focused
                    boxShadow: "0px 0px 1px rgba(0, 123, 255, 0.6)", // Add subtle shadow
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white", // Default label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Label color when focused
                },
                "& .MuiInputBase-input": {
                  color: "white", // Text color
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "gray", // Placeholder color
                },
                backgroundColor: "#374151", // Input background color
                borderRadius: "5px", // Rounded corners
              }}
              {...register("password", { required: "Password is required" })}
            />
            <Button
              variant="contained"
              type="submit"
              className={`w-full flex items-center justify-center text-white font-medium bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-md px-5 py-4 ${
                isLoading ? "cursor-not-allowed opacity-75" : ""
              }`}
              disabled={isLoading}
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
