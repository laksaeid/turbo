import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Home = () => {
  const schema = z.object({
    todo: z.string().min(3).max(10),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const addTodoHandler = function(data:z.infer<typeof schema>){
    console.log(data);
    
  }
  return (
    <Box onSubmit={handleSubmit(addTodoHandler)} component={'form'}>
      <TextField
        error={errors.todo?.message ? true : false}
        helperText={errors.todo?.message}
        inputProps={{ ...register("todo") }}
        type="text"
        label="todo"
        name="todo"
      />
    </Box>
  );
};

export default Home;
