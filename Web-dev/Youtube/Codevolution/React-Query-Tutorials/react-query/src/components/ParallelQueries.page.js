import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  const {
    isLoading: shIsLoading,
    isFetching: shIsFetching,
    isError: shIsError,
    error: shError,
    data: pHeroes,
  } = useQuery(["parallel-superheroes"], fetchSuperHeroes);
  const {
    isLoading,
    isFetching,
    isError,
    error,
    data: pFriends,
  } = useQuery(["parallel-friends"], fetchFriends);

  if (isLoading || shIsLoading || isFetching || shIsFetching)
    return <h1>Loading</h1>;

  if (isError || shIsError)
    return <h1>{(shError && shError.message) || (error && error.message)}</h1>;
  return (
    <div>
      <h1>ParallelQueriesPage</h1>
      <h4>Super Heroes</h4>
      {pHeroes &&
        pHeroes?.data.map((hero) => (
          <p key={hero.id}>Hero Name : {hero.name}</p>
        ))}
      <hr />
      {pFriends &&
        pFriends?.data.map((friend) => (
          <p key={friend.id}>Friend Name : {friend.name}</p>
        ))}
    </div>
  );
};
export default ParallelQueriesPage;
