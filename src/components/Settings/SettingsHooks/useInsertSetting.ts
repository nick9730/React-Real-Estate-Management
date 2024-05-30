import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InsertOption, OptionProps } from "../../../Services/apiOption";
import toast from "react-hot-toast";
import { useGetUser } from "../../Users/useGetUser";

export const useInsertSetting = () => {
  const queryClient = useQueryClient();
  const { user } = useGetUser();
  const user_id = user?.id;
  const { mutate: Insert, isPending } = useMutation({
    mutationFn: (options: OptionProps) => InsertOption({ options, user_id }),
    onSuccess: () => {
      toast.success("Οι επιλογές αποθηκεύτηκαν");
      queryClient.invalidateQueries({
        queryKey: ["options"],
      });
    },
  });

  return { Insert, isPending };
};
