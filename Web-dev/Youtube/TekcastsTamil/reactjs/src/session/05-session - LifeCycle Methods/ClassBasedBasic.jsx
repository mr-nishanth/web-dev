import { Component } from "react";

// https://jsonplaceholder.typicode.com/todos/

class ClassBasedBasic extends Component {
  constructor(props) {
    super(props);
    this.state = { inc: 1 };
    this.increment = this.increment.bind(this);
  }
  increment = () => {
    this.setState((prev) => ({
      inc: prev.inc + 1,
    }));
  };
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  render() {
    console.log("Render.....");
    return (
      <>
        <h1>Nishanth</h1>
        <h1>Life Cycle</h1>
        <h3>INC : {this.state.inc}</h3>
        <button onClick={this.increment}>Increment Me</button>
      </>
    );
  }
}

export default ClassBasedBasic;
