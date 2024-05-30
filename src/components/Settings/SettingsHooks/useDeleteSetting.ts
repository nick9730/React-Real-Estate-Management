import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteOption } from "../../../Services/apiOption";
import toast from "react-hot-toast";
import { useGetUser } from "../../Users/useGetUser";

export const useDeleteSetting = () => {
  const queryClient = useQueryClient();
  const { user } = useGetUser();
  const user_id = user?.id;

  const { mutate: deleteOptionById, isPending } = useMutation({
    mutationFn: (id: number) => DeleteOption(id, user_id),
    onSuccess: () => {
      toast.success("Η διαγραφή έγινε επιτυχώς");
      queryClient.invalidateQueries({
        queryKey: ["options"],
      });
    },
  });

  return { deleteOptionById, isPending };
};
