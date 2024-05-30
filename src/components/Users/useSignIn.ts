import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignIn } from "../../Services/apiUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: SignInUser, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      SignIn({ email, password }),
    onSuccess: (user) => {
      if (user.user?.email === "xrist2kis@gmail.com") {
        toast.success("Xrhstakh Gamiesaiiiiiii <3 LOLL");
      } else {
        toast.success("Συνεχίζετε ως επισκέπτης");
      }
      queryClient.setQueryData(["user"], user.user);
      navigate("/home", { replace: true });
    },
  });
  return { SignInUser, isPending };
};
