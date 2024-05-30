import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteImagesByID } from "../../../Services/apiImage";
import toast from "react-hot-toast";

export const useDeleteImageByID = (photos: number) => {
  const queryClient = useQueryClient();
  const { mutate: deleteImage, isPending } = useMutation({
    mutationFn: ({ id, name }: { id: number; name: string | null }) =>
      DeleteImagesByID({ id, name }),
    onSuccess: () => {
      if (photos > 2) {
        toast.success("Διαγράψατε επιτυχώς τις φωτογραφίες");
      } else {
        toast.success("Διαγράψατε επιτυχώς την φωτογραφία");
      }
      queryClient.invalidateQueries({
        queryKey: ["imagesByID"],
      });
    },
  });

  return { deleteImage, isPending };
};
