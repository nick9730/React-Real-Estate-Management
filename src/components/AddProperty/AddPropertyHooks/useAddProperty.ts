import { useMutation } from "@tanstack/react-query";
import { Insert } from "../../../Services/apiEstates";
import toast from "react-hot-toast";

export const useAddProperty = () => {
  const { mutate: InsertProperty, isPending } = useMutation({
    mutationFn: Insert,
    onSuccess: () => {
      toast.success("Η αποθήκευση έγινε επιτυχώς");
    },
  });

  return { InsertProperty, isPending };
};
