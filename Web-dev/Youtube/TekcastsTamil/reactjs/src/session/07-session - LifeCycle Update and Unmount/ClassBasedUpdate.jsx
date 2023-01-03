import { Component } from "react";

// https://jsonplaceholder.typicode.com/todos/

class ClassBasedUpdate extends Component {
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
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update : Snapshot", snapshot);
    console.log("Component Did Update : PreState", prevState);
  }

  render() {
    console.log("Rendering.....");
    return (
      <>
        <h1>Life Cycle Update and Unmount</h1>
        <h3>INC : {this.state.inc}</h3>
        <button onClick={this.increment}>Increment Me</button>
      </>
    );
  }
}

export default ClassBasedUpdate;
