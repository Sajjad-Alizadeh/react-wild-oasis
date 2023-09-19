import toast from "react-hot-toast";

import { useMutation } from "@tanstack/react-query";
import { signup as SignupApi } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: SignupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
    onError: () => {
      toast.error("Failed to create account");
    },
  });

  return { signup, isLoading };
}
