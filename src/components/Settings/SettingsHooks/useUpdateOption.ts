import { useMutation, useQueryClient } from "@tanstack/react-query";
import { OptionProps, UpdateOptions } from "../../../Services/apiOption";
import toast from "react-hot-toast";
import { useGetUser } from "../../Users/useGetUser";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();
  const { user } = useGetUser();
  const user_id = user?.id;
  const { mutate: UpdateSetting, isPending } = useMutation({
    mutationFn: (options: OptionProps) => UpdateOptions({ options, user_id }),
    onSuccess: () => {
      toast.success("Η διαγραφή έγινε επιτυχώς");
      queryClient.invalidateQueries({
        queryKey: ["options"],
      });
    },
  });

  return { UpdateSetting, isPending };
};
