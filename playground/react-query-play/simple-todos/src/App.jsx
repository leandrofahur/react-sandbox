import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  const fetchTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.json();
  };

  const { data } = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
  console.log(data);

  return <div>{data.title}</div>;
}

export default App;
