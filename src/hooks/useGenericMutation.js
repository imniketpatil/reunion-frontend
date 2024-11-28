import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useGenericMutation(url, method = "POST") {
  console.log(url);
  console.log(method);

  const validMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
  if (!validMethods.includes(method.toUpperCase())) {
    throw new Error(`Invalid HTTP method: ${method}`);
  }

  console.log("HI");

  return useMutation({
    mutationFn: async (data) => {
      const response = await axios({
        method,
        url,
        data,
      });
      return response;
    },
    onError: (err) => {
      console.log(err);
    },
  });
}
