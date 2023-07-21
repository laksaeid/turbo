import { useMutation, useQueryClient } from "react-query";
import { instance } from "../../constants";

const useAddTodo = (reset:()=>void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { todo: string }) => await instance.post("", data),
    onSuccess: () => {
      queryClient.invalidateQueries(["getTodos"]);
      reset();
    },
  });
};

export default useAddTodo;
