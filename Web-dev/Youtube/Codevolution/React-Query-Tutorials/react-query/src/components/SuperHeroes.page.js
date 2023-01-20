import { useState, useEffect } from "react";
import axios from "axios";

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      // .get("http://localhost:4000/superheroes")
      .get("http://localhost:4000/superheroes1")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => setIsError(err.message));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h5>{isError}</h5>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      <h3></h3>
      {data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
