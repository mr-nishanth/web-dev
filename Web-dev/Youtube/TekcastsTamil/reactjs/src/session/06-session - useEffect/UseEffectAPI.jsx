import { useEffect, useState } from "react";
import axios from "axios";
const UseEffectEx = () => {
  const [loading, setLoading] = useState(false);
  const [todoData, setTodoData] = useState([]);

  // =======================================================================
  // ~ The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
  // =======================================================================

  /*
  const getTodoData = () => {
    setLoading(true);
    console.log("Before fetch", loading);
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetching data");
        console.log(data);
        // setTodoData((prev) => ({ ...prev, data }));
        setTodoData(data);
        setLoading(false);
      });
    console.log("After fetch", loading);
  };
  */

  const getTodoData = async () => {
    setLoading(true);
    console.log("Before fetch", loading);
    const responseData = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    setLoading(false);
    console.log("After fetch", loading);
    console.log(responseData);
    setTodoData(responseData.data);
  };

  useEffect(() => {
    getTodoData();
  }, []);
  console.log("Rendering...");
  console.log("TODO DATA: ", todoData);

  console.log("After L", loading);
  if (loading) return <p>Loading....</p>;
  console.log("After L", loading);
  return (
    <div>
      <h1>API</h1>
      <ol>
        {todoData.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default UseEffectEx;
