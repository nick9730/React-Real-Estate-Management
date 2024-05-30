import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Upload } from "../../../Services/apiEstates";

export const useAddImage = () => {
  const queryClient = useQueryClient();
  const { mutate: UplodaImage, isPending } = useMutation({
    mutationFn: Upload,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images", "imagesByID"],
      });
    },
  });

  return { UplodaImage, isPending };
};
