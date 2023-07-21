import { useQuery } from "react-query"
import { instance } from "../../constants"

export const useGetTodos = function(){
    return useQuery<{todo:string,id:number}[]>({
        queryKey:['getTodos'],
        queryFn:async ()=> (await instance.get('')).data
    })
}