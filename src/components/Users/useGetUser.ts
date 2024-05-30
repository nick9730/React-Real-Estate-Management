import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../Services/apiUser";

export function useGetUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: user?.aud === "authenticated",
  };
}
