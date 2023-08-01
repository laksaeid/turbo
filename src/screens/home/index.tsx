import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useAddTodo from "../../hooks/useAddTodo";
import Todos from "../../components/todos";
import {  FormEventHandler, useState } from "react";
import { useEditTodo } from "../../hooks/useEditTodo";

const Home = () => {
const [isEdit, setIsEdit] = useState<boolean | string>();

  const schema = z.object({
    todo: z.string().min(3).max(10),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
    getValues
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const { mutate } = useAddTodo(reset);
  const addTodoHandler = function (data: z.infer<typeof schema>) {
    mutate(data);
  };

  const {mutate:editMutate} = useEditTodo(isEdit as string,reset)
  const editTodoHandler:FormEventHandler<HTMLFormElement> = function(e){
    e.preventDefault()
    editMutate({"todo":getValues('todo')})
    setIsEdit(false)
    
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width:'100%',
        px:3
      }}
      onSubmit={ isEdit ? editTodoHandler : handleSubmit(addTodoHandler)}
      component={"form"}
    >
      <TextField
        error={errors.todo?.message ? true : false}
        helperText={errors.todo?.message}
        inputProps={{ ...register("todo") }}
        sx={{
          bgcolor:'white'
        }}
        type="text"
        placeholder="todo"
        name="todo"
      />
      <Todos setIsEdit={setIsEdit} setValue={setValue} reset={reset} />
    </Box>
  );
};

export default Home;
