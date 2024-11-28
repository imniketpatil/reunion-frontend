// useGenericQuery.js
import { useQuery } from "@tanstack/react-query";
import { QueryStatus } from "./statusEnum";

export function useGenericQuery({ key, fetchData }) {
  const { data, error, isLoading, isSuccess, isError } = useQuery(
    key,
    fetchData
  );

  // Determine the query status based on React Query's result
  let status;
  if (isLoading) {
    status = QueryStatus.LOADING;
  } else if (isSuccess) {
    status = QueryStatus.SUCCESS;
  } else if (isError) {
    status = QueryStatus.ERROR;
  }

  return {
    data,
    error,
    status,
  };
}
