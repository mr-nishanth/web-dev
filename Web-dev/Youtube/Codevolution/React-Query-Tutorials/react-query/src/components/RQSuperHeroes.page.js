import axios from "axios";
import { useQuery } from "react-query";
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    // Opening Model , Navigate Different routes , Display Toast Notifications
    console.log(
      `Performing sideEffects eg:Toast notifications ${JSON.stringify(data)}`
    );
  };
  const onError = (error) => {
    console.log(
      `Performing sideEffects after encountered error: ${error.message}`
    );
  };
  const {
    isLoading,
    isFetching,
    refetch, // used for triggering manually fetching
    isError,
    error,
    data: superHeroes,
  } = useQuery(["super-heroes"], fetchSuperHeroes, {
    onSuccess: onSuccess,
    onError: onError,
  });

  console.log({ isFetching, isLoading });
  if (isLoading || isFetching) return <h1>Loading....</h1>;
  if (isError) return <h1>{error.message}</h1>;
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
