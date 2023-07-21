import { useMutation } from "react-query";
import { instance } from "../../constants";

const useAddTodo = () => {
return useMutation({
    mutationFn:(data:{todo:string})=>instance.post('',data),
})

}
 
export default useAddTodo;