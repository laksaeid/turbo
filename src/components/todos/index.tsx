import { Box, Button, Stack, Typography } from "@mui/material";
import { useGetTodos } from "../../hooks/useGetTodos";

const Todos = () => {
  const { data } = useGetTodos();

  return (
    <Stack>
      {data?.map((todo) => (
        <Box key={todo.id} sx={{
          border:'1px solid black' ,
          borderRadius:2,
          p:1
        }}>
        <Typography align="center">{todo.todo}</Typography>
        <Button sx={{width:'50%'}} variant="contained" color='primary'>delete</Button>
        <Button sx={{width:'50%'}} variant="contained" color='warning'>edit</Button>
        </Box>
        
      ))}
    </Stack>
  );
};

export default Todos;
