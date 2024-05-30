import { useQuery } from "@tanstack/react-query";
import { getOption } from "../../../Services/apiOption";
import { useGetUser } from "../../Users/useGetUser";

export const useGetOption = () => {
  const { user } = useGetUser();
  const user_id = user?.id;
  const { data, isLoading } = useQuery({
    queryKey: ["options", user_id],
    queryFn: () => getOption(user_id),
  });

  return { data, isLoading };
};
