import { useState } from "react";
import { useQuery } from "react-query";

interface Todo {
  userId: number | null;
  id: number | null;
  title: string;
  completed: boolean;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      userId: null,
      id: null,
      title: "",
      completed: false,
    },
  ]);

  async function fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  }

  const { data, isLoading, isError } = useQuery("Todos", fetchTodos);

  return (
    <div>
      <ul>
        {!isLoading &&
          todos.map((todo: any) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
