import { useMutation, useQueryClient } from "react-query";
import { instance } from "../../constants";

export const useDeleteTodo = (reset: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id:number) =>
      await instance.delete(""+id),
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
      reset();
    },
  });
};
