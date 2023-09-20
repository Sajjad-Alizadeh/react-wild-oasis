import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateUser as updatedUserApi } from "../../services/apiAuth";

export function useUpdateUser() {
  const client = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updatedUserApi,
    onSuccess: () => {
      toast.success("User updated successfully");
      client.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateUser };
}
