import { Box, Button, Stack, Typography } from "@mui/material";
import { useGetTodos } from "../../hooks/useGetTodos";
import { useDeleteTodo } from "../../hooks/useDeleteTodo";
import { UseFormSetValue } from "react-hook-form";

interface Props {
  reset:()=>void
  setValue:UseFormSetValue<{ todo: string; }>
  setIsEdit:(x:boolean | string)=>void
}

const Todos = ({reset,setValue,setIsEdit}:Props) => {

  const { data } = useGetTodos();
  const { mutate } = useDeleteTodo(reset)

 const handleEdit = function(todo:{id:number,todo:string}){
  setValue('todo',todo.todo)
  setIsEdit(todo.id.toString())
 }

  return (
    <Stack>
      {data?.map((todo) => (
        <Box key={todo.id} sx={{
          border:'1px solid black' ,
          borderRadius:2,
          p:1
        }}>

        <Typography align="center">{todo.todo}</Typography>

        <Button onClick={()=>mutate(todo.id)} sx={{width:'50%'}} variant="contained" color='primary'>delete</Button>

        <Button onClick={()=>handleEdit(todo)} sx={{width:'50%'}} variant="contained" color='warning'>edit</Button>
        
        </Box>
        
      ))}
    </Stack>
  );
};

export default Todos;
