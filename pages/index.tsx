import TodoList from "@/components/TodoList";
import { Todo } from "@/components/types";
import React, { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, content: "First Todo", completed: false },
    { id: 2, content: "Second Todo", completed: true },
  ]);

  return (
    <div>
      <h1>Hello World.</h1>
      <TodoList todos={todos} />
    </div>
  );
}
