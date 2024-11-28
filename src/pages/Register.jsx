import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGenericMutation } from "../hooks/useGenericMutation";
import { QueryStatus } from "../hooks/statusEnum";
import { client_url } from "../utils/client_url";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, status, error } = useGenericMutation(
    `${client_url}/users/register`,
    "POST"
  );

  const onSubmit = (data) => {
    console.log("Submitting data:", data);

    mutate(data);
  };

  return (
    <div className="dark">
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center ">
          Reunion Task Manager
        </h1>
        <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-6">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center">
              Create A New Account
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <TextField
                id="outlined-name-input"
                label="Enter Name"
                type="name"
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
                    color: "#333", // Text color
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "gray", // Placeholder color
                  },
                  backgroundColor: "#374151", // Input background color
                  borderRadius: "5px", // Rounded corners
                }}
                {...register("name", { required: "Name is required" })}
              />
              <TextField
                id="outlined-username-input"
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
                    color: "#333", // Text color
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "gray", // Placeholder color
                  },
                  backgroundColor: "#374151", // Input background color
                  borderRadius: "5px", // Rounded corners
                }}
                {...register("email", { required: "Username is required" })}
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
                    color: "#333", // Text color
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
                  status === QueryStatus.LOADING
                    ? "cursor-not-allowed opacity-75"
                    : ""
                }`}
                disabled={status === QueryStatus.LOADING}
              >
                {status === QueryStatus.LOADING ? (
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
                      d="M4 12a8 8 0 0116 0"
                    ></path>
                  </svg>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
            <div className="flex justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-700"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
