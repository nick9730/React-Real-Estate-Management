import { useQuery } from "@tanstack/react-query";
import { getOptionByRole } from "../../Services/apiOption";
import { useGetUser } from "../Users/useGetUser";

export const useGetOptionByRole = (role: string) => {
  const { user } = useGetUser();

  const user_id = user?.id;

  const { data, isLoading } = useQuery({
    queryKey: ["options", role, user_id],
    queryFn: () => getOptionByRole(role, user_id),
  });

  return { data, isLoading };
};
