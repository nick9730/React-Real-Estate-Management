import { useQuery } from "@tanstack/react-query";
import { GetEstateByID } from "../../../Services/apiEstates";
import { useParams } from "react-router-dom";
import { useGetUser } from "../../Users/useGetUser";

export const useGetEstateByID = () => {
  const { id: IdParams } = useParams();
  const { user } = useGetUser();
  const id = parseInt(IdParams ? IdParams : "");
  const user_id = user?.id;

  const { data, isLoading } = useQuery({
    queryKey: ["property", IdParams],
    queryFn: () => GetEstateByID(id, user_id),
  });

  return { data, isLoading };
};
