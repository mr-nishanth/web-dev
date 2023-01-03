import { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [count, setCount] = useState(10);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
  };
  const toggleMe = () => {
    setToggle((prev) => !prev);
  };

  //^ Its running every time the state was changes or /component render
  // useEffect(() => {
  //   console.log(`Use Effect ${count}`);
  // });

  //^ Its running the first time ( componentDidMount ) [dependencies array]
  // useEffect(() => {
  //   console.log(`Use Effect ${count}`);
  // }, []);

  //^ Its running every time the specified dependencies state was changed
  // useEffect(() => {
  //   console.log(`Use Effect ${count}`);
  // }, [count]);
  //   useEffect(() => {
  //     console.log(`Use Effect ${count}`);
  //   }, [count, toggle]);
  const handleScroll = () => {
    console.log("Scroll", window.scrollY);
  };
  useEffect(() => {
    //ComponentDidUpdate
    console.log("useEffect");
    window.addEventListener("scroll", handleScroll);

    return () => {
      // CleanUp componentUnMount
      console.log("CleanUP");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("Rendering...");
  return (
    <div>
      <h1>counter using useState</h1>
      <div>Counter : {count}</div>

      <button onClick={inc}> + </button>
      <button onClick={dec}> - </button>
      <br />
      <h1>Toggling using useState</h1>
      <button onClick={toggleMe}>{toggle ? "ON" : "OFF"}</button>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit sed
        assumenda vel quos inventore ipsam quam alias eum a repudiandae porro
        consequatur quas consequuntur veniam non culpa unde, dolor dolorum nisi
        omnis! Nesciunt aut numquam enim error veritatis corporis doloribus qui,
        adipisci eius, magnam odio, nobis fugiat sint veniam? Eum, autem tenetur
        aperiam laudantium mollitia quod nihil. Laborum accusantium hic qui
        velit similique delectus maiores quaerat unde fugit error, autem placeat
        ducimus? Asperiores sit labore nam modi alias saepe non minima
        inventore! Sint eveniet reprehenderit tenetur sequi, quos laborum
        distinctio quaerat quibusdam adipisci quae aperiam, consequuntur sit
        deleniti, quo nemo!
      </p>
    </div>
  );
};
export default UseEffectCleanUp;
