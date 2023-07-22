import { useMutation, useQueryClient } from "react-query"
import { instance } from "../../constants"

export const useEditTodo=(id:string,reset:()=>void)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async(todo:{todo:string})=> await instance.put(id,todo),
        onSuccess: () => {
            queryClient.invalidateQueries(["getTodos"]);
            reset();
          },
    })
}