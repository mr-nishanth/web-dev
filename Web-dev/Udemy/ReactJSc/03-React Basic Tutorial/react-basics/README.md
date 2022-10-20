```react

import ReactDom from "react-dom"

const Greeting = () => {
    return (
        <h4>This is my first components</h4>
    )
}

// ReactDom.render(Component,where the component rendered)
ReactDom.render(<Greeting/> ,document.getElementById("root"))

```

```react

import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX
// JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

// const Greeting = () => {
//   return <h4>This is my first components</h4>;
// };

// const Greeting = () => {
//   // createElement(what element what to return ,props object,what is gone to children)
//   return React.createElement("h1",{},"Hello World");
// };

const Greeting = () => {
    return (
        <div>
            <h1>Hello World</h1>
        <h4>This is my first components</h4>
      </div>
    );
};


// ReactDom.render(Component,where the component rendered)
ReactDom.render(<Greeting />, document.getElementById("root"));


```

## JSX Rules

```react
import React from "react";
import ReactDom from "react-dom";

/*
    JSX Rules
    return single element
    div / section / article / React Fragment <> </>
    use camelCase for html attribute
    className instead of class
    close every element
    formatting
*/

const Greeting = () => {
    return (
      <div>
        <h1>JSX Rules</h1>
        <h1>return single element</h1>
      </div>
    );
};


// ReactDom.render(Component,where the component rendered)
ReactDom.render(<Greeting />, document.getElementById("root"));

```

## Nested Components and Tools

```react
import React from "react";
import ReactDom from "react-dom";

/*
    Nested Components and Tools React Tools
*/

const Greeting = () => {
  return (
    <div>
      <h1>Nested Components</h1>
      <Person />
      <Message />
    </div>
  );
};

// implicit return
const Person = () => <h3>This is Implicit return</h3>;

// explicit return
const Message = () => {
  return <p>Hello! Mr Black ,who was your day ?</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));

```

## Mini Book Project

```react
import React from "react";
import ReactDom from "react-dom";

/*
    Mini Book Project
*/

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
      <Price />
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Atomic-Habits"
  />
);

const Title = () => <h1>Atomic Habits: The life-changing million</h1>;
const Author = () => <h3>James Clear</h3>;
const Price = () => <h6>$5</h6>;
ReactDom.render(<BookList />, document.getElementById("root"));

```

## Passing a props in different ways

```react

   <Book
              // Old methods
              // img={book.img}
              // author={book.author}
              // title={book.title}
              // altImg={book.altImg}

              //  passing object as props
              // book={book}

              // key props
              key={book.id}
              //* passing props using spread operator
              {...book}
            />

              console.log(props);
  // const { title, author, img, altImg } = props;

  // const { title, author, img, altImg } = props.book;

  const { title, author, img, altImg } = props;

```
