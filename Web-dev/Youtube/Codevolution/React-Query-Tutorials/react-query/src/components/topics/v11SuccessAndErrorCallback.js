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

/*
  Home Work

  Polling + Callbacks

  Use refetchInterval options to poll the api data every 3 sec , behind the scenes add fourth superhero of your choice to the superheros array in db.json
  within the onSuccess callback check if the number  of heroes is 4 and if it is the case i want you to stop the polling ,
   if there is an error as well i want to stop the polling

   HINT:
   Maintain the state variable initial value 3000 and the state variable will be assigned to refetchInterval configuration inside the callback functions check for the response or error and set the value to false that will stop your polling
*/
