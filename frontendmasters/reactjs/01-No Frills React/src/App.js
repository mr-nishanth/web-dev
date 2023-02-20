const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h3", {}, "Parrot"),
  ]);
};

// {} and null are same thing in React
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", null, "Adopt Me"),
    React.createElement(Pet, null, null),
    React.createElement(Pet, null, null),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App, {}, null));
