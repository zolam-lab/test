import React from "react";

import Paper from "../Component/Paper";
import Header from "../Component/Header";
import TodoForm from "../Component/TodoForm";
import Todos from "../Component/Todos";

const ListTodo = () => {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
};

export default ListTodo;
