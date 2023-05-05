import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Todos from "./components/Todos";

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
      <Todos todos={data} />
    </div>
  );
}

export default App;
