import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useAddTodo from "../../hooks/useAddTodo";
import Todos from "../../components/todos";

const Home = () => {
  const schema = z.object({
    todo: z.string().min(3).max(10),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const { mutate } = useAddTodo(reset);
  const addTodoHandler = function (data: z.infer<typeof schema>) {
    mutate(data);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      onSubmit={handleSubmit(addTodoHandler)}
      component={"form"}
    >
      <TextField
        error={errors.todo?.message ? true : false}
        helperText={errors.todo?.message}
        inputProps={{ ...register("todo") }}
        type="text"
        label="todo"
        name="todo"
      />
      <Todos />
    </Box>
  );
};

export default Home;
