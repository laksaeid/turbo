import { Stack } from "@mui/material";
import { useGetTodos } from "../../hooks/useGetTodos";

const Todos = () => {
  const { data } = useGetTodos();

  return (
    <Stack>
      {data?.map((todo) => (
        <p>{todo.todo}</p>
      ))}
    </Stack>
  );
};

export default Todos;
