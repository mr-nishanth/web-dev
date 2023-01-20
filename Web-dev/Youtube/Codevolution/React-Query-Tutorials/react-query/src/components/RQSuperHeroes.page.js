import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return axios.get("http://localhost:4000/superheroes1");
};

export const RQSuperHeroesPage = () => {
  const {
    isLoading,
    isError,
    error,
    data: superHeroes,
  } = useQuery(["super-heroes"], fetchSuperHeroes);

  if (isLoading) return <h1>Loading....</h1>;

  // ! By default the react query automatically retry(4-times) if the error occurred
  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {superHeroes?.data?.map((hero) => {
        return (
          <div key={hero.id}>
            <p>{hero.name}</p>
          </div>
        );
      })}
    </>
  );
};
