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
    refetch, // used for triggering manually fetching
    isError,
    error,
    data: superHeroes,
    // } = useQuery(["super-heroes"], fetchSuperHeroes, {});
  } = useQuery(["super-heroes"], fetchSuperHeroes, {
    // ~ Cache
    // cacheTime: 5000,
    // ~
    // staleTime: 20000,
    // ~
    // refetchOnMount: true, // by default true , false ,  'always' -> Its not care about staleTime , its refetch on unmount always
    // refetchOnWindowFocus: true, // by default true , false , 'always' -> Its not care about staleTime , its refetch on window focus always
    // ~ Polling
    // refetchInterval:false // by default false
    // refetchInterval: 2000, // the query refresh the data every 2 sec whether staleTime:30000/refetchOnMount:false/refetchWindowFocus:false is set or not
    // refetchIntervalInBackground: true, // Even though the window was not in focus , its refetch the data in background
    // ~ useQuery on Click
    // 1st disable fetching onmount using enabled
    // enabled: true, // by default true , if we set enabled:false , then the useQuery requires the any event to be fired
    enabled: false,
  });
  // cacheTime: 5000 => 5sec

  console.log({ isFetching, isLoading });
  if (isLoading || isFetching) return <h1>Loading....</h1>;

  if (isError) return <h1>{error.message}</h1>;

  // if (isFetching) return <h1>Fetching...</h1>;

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Super Heroes</button>
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
