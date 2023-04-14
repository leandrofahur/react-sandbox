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

  const { data, isLoading, isError, error } = useQuery("Todos", fetchTodos, {
    staleTime: 100,
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return (
      <div>
        <h3>Oops, something went wrong!</h3>
        <p>{error!.toString()}</p>
      </div>
    );
  }

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
