import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteEstate } from "../../../Services/apiEstates";
import toast from "react-hot-toast";

export const useDeleteProperties = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteProperty, isPending } = useMutation({
    mutationFn: DeleteEstate,
    onSuccess: () => {
      toast.success("Έχέτε διαγράψει επιτυχώς το ακίνητο");
      queryClient.invalidateQueries({
        queryKey: ["estates"],
      });
    },
  });

  return { deleteProperty, isPending };
};
