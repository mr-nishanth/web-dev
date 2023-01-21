import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    // console.log(
    //   `Performing sideEffects eg:Toast notifications ${JSON.stringify(data)}`
    // );
  };
  const onError = (error) => {
    // console.log(
    //   `Performing sideEffects after encountered error: ${error.message}`
    // );
  };
  const {
    isLoading,
    isFetching,
    refetch, // used for triggering manually fetching
    isError,
    error,
    data: superHeroes,
    // } = useSuperHeroesData(onSuccess, onError);
  } = useSuperHeroesData();

  // console.log({ superHeroes });
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
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};

/**
 * Create brand new components and display the list of superheroes using custom query hook , we have just built,
 * however i also want you to ensure the data is fetched when the component mounts in react query superheros page
 * where as the data should only be fetched , when you click a button in the new component
 */
