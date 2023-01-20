// ! By default the react query automatically retry(4-times) if the error occurred

import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
  // return axios.get("http://localhost:4000/superheroes1");
};

export const RQSuperHeroesPage = () => {
  const {
    isLoading,
    isFetching,
    isError,
    error,
    data: superHeroes,
    // } = useQuery(["super-heroes"], fetchSuperHeroes, {});
  } = useQuery(["super-heroes"], fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 20000,
    refetchOnMount: "always", // by default true , false ,  'always' -> Its not care about staleTime , its refetch on unmount always
    refetchOnWindowFocus: true, // by default true , false , 'always' -> Its not care about staleTime , its refetch on window focus always
  });
  // cacheTime: 5000 => 5sec

  console.log({ isFetching, isLoading });
  if (isLoading) return <h1>Loading....</h1>;

  if (isError) return <h1>{error.message}</h1>;

  // if (isFetching) return <h1>Fetching...</h1>;

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
