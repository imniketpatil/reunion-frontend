// src/hooks/useLoginMutation.js
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import client_url from "../utils/config.js";
import { useContext } from "react";
import OpenEditTaskModelContext from "../context/OpenEditTaskModelContext.js";
import OpenAddTaskModelContext from "../context/OpenAddTaskModelContext.js";

const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => {
      const { email, password } = data;
      return axios.post(
        `${client_url}/users/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );
    },
    onSuccess: (response) => {
      const { accessToken, refreshToken, user } = response.data.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

const useRegisterMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => {
      console.log(data);

      const { email, password, name } = data;
      return axios.post(
        `${client_url}/users/register`,
        { email, password, name },
        {
          withCredentials: true,
        }
      );
    },
    onSuccess: (response) => {
      navigate("/login");
    },
    onError: (error) => {
      console.error("Register failed:", error);
    },
  });
};

const useAddTaskMutation = () => {
  const { isModalOpen, setIsModalOpen } = useContext(OpenAddTaskModelContext);
  return useMutation({
    mutationFn: (data) => {
      console.log(data);

      const { title, startTime, endTime, priority, status, accessToken } = data;
      return axios.post(
        `${client_url}/tasks/create-task`,
        { title, startTime, endTime, priority, status },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    },
    onSuccess: () => {
      setIsModalOpen(false);
    },
  });
};

const useGetTasksQuery = async (accessToken, id) => {
  try {
    const response = await axios.get(`${client_url}/tasks/get-tasks`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      params: { userId: id },
    });
    // console.log(response.data.data);

    return response.data.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch tasks");
  }
};

export {
  useLoginMutation,
  useRegisterMutation,
  useAddTaskMutation,
  useGetTasksQuery,
};
