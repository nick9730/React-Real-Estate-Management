import { useQuery } from "@tanstack/react-query";
import { GetImages } from "../../../Services/apiImage";
import { useGetUser } from "../../Users/useGetUser";

export const useGetImages = () => {
  const { user } = useGetUser();
  const user_id = user?.id;

  const { data, isLoading } = useQuery({
    queryKey: ["images"],
    queryFn: () => GetImages(user_id ? user_id : ""),
  });

  return { data, isLoading };
};
