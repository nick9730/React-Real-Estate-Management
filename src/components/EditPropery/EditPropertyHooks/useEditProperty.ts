import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateEstate } from "../../../Services/apiEstates";
import toast from "react-hot-toast";

export const useEditProperty = () => {
  const queryClient = useQueryClient();
  const { mutate: Update, isPending } = useMutation({
    mutationFn: UpdateEstate,
    onSuccess: () => {
      toast.success("Το ακίνητο ενημερώθηκε"),
        queryClient.invalidateQueries({
          queryKey: ["property"],
        });
    },
  });

  return { Update, isPending };
};
