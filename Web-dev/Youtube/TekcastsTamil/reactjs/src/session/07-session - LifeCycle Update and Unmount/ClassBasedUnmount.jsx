import { Component } from "react";

// https://jsonplaceholder.typicode.com/todos/

class ClassBasedUnmount extends Component {
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

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update : Snapshot", snapshot);
    console.log("Component Did Update : PreState", prevState);
  }

  // ==================================================
  handleScroll = () => {
    console.log("Scroll", window.scrollY);
  };
  componentDidMount() {
    console.log("Component Did Mount");
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    console.log("Component Will Unmount   ");
    console.log("Component Will Unmount : Cleanup Activity");
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    console.log("Rendering.....");
    return (
      <>
        <h1>Life Cycle Update and Unmount</h1>
        <h3>INC : {this.state.inc}</h3>
        <button onClick={this.increment}>Increment Me</button>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          voluptate quisquam consectetur earum illo atque minus doloremque,
          obcaecati ipsa quia cum nihil doloribus adipisci aspernatur enim sit
          natus voluptates ex ea! A repellendus nihil laudantium reprehenderit?
          Qui vero aperiam iusto ad provident temporibus, quibusdam laborum quos
          repellendus assumenda nesciunt facilis ipsum dicta magnam esse vitae.
          Voluptatibus non vel qui at, amet aliquam voluptas sit cupiditate
          illum minus officia maiores minima commodi, architecto voluptatum
          veniam, quo ipsam consequuntur. Voluptate unde velit deserunt. Ea
          ratione distinctio nulla, facilis, optio perspiciatis rerum sit libero
          accusantium fugit cumque iusto eveniet, ipsa commodi est!
          Necessitatibus?
        </p>
      </>
    );
  }
}

export default ClassBasedUnmount;
