import { Component } from "react";

// https://jsonplaceholder.typicode.com/todos/

class ClassBasedAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      todoData: [],
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
    this.setState({
      loading: true,
    });
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetching data");
        console.log(data);
        this.setState({
          loading: false,
          todoData: data,
        });
      });
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  render() {
    console.log("Render.....");
    return (
      <>
        <h1>API</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <ol>
            {this.state.todoData.map((todo) => (
              <li key={todo.id}>
                {todo.title}{" "}
                <p>{todo.completed ? "Completed" : "Not Completed"}</p>
              </li>
            ))}
          </ol>
        )}
        {/* <button onClick={this.increment}>Increment Me</button> */}
      </>
    );
  }
}

export default ClassBasedAPI;
