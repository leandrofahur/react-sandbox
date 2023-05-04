import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          {todo.completed ? (
            <p>
              <s>Task: {todo.title}</s>
            </p>
          ) : (
            <p>Task: {todo.title}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
