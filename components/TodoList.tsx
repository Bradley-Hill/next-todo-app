import React, { Component } from "react";
import { Todo } from "./types";

type TodoListProps = {
  todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      <p>Todo List</p>
    </>
  );
};

export default TodoList;
