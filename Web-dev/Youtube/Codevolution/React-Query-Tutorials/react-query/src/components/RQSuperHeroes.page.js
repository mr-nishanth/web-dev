import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const {
    isLoading,
    isError,
    data: superHeroes,
  } = useQuery(["super-heroes"], fetchSuperHeroes);

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>{JSON.stringify(isError)}</h1>;

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
