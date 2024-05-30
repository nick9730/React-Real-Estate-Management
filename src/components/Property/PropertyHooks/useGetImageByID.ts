import { useQuery } from "@tanstack/react-query";
import { GetImagesByID } from "../../../Services/apiImage";
import { useGetUser } from "../../Users/useGetUser";

export const useGetImagesByID = (id_image: number) => {
  const { user } = useGetUser();
  const user_id = user?.id;

  const { data, isLoading } = useQuery({
    queryKey: ["imagesByID", id_image],
    queryFn: () => GetImagesByID(id_image, user_id ? user_id : ""),
    retry: false,
  });

  return { data, isLoading };
};
