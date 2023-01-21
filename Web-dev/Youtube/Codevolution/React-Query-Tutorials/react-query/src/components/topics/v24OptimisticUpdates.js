import axios from "axios";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
export const useSuperHeroesData = (onSuccess, onError) => {
  // export const useSuperHeroesData = () => {
  return useQuery(["super-heroes"], fetchSuperHeroes, {
    onSuccess: onSuccess,
    onError: onError,
    // select: (res) => {
    //   const superHeroNames = res.data.map((hero) => hero.name);
    //   console.log({ superHeroNames });
    //   return superHeroNames;
    // },
  });
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};
export const useAddSuperHeroData = () => {
  // Query Invalidation
  const queryClient = useQueryClient();
  // We to hold the success callback on the use mutation hook
  return useMutation(addSuperHero, {
    // v24 Optimistic Updates
    // set onMutate callback , onMutate called before the mutation function fired , its passed the same variable the mutation function reserved
    onMutate: async (newHero) => {
      // Cancel any outgoing refetching request so they don't overwrite our optimistic update the way to do that is using the cancel queries method on the query client instance
      await queryClient.cancelQueries("super-heroes"); // its need to be awaited

      // we need to hold of the current query data before we make any update this will help us roll back in case the mutation fails and to get hold of the current query data we use the getQueryData method on the query client instance

      const previousHeroes = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldCacheData) => {
        return {
          ...oldCacheData,
          data: [
            ...oldCacheData.data,
            { id: oldCacheData?.data?.length + 1, ...newHero },
          ],
        };
      });
      // return an object with a key value set to perviousHeroes data this will be used to roll back in case the mutation fails/errors out

      return { previousHeroes };
    },
    onError: (_error, _hero, context) => {
      // by using the context we can access the previousHeroes data
      queryClient.setQueryData("super-heroes", context.previousHeroes);
    },
    // This Function is called if the mutation is either successful or failed
    // In this function refetch the superheroes query
    onSettled: () => {
      // This ensures that client state is in sync with the server state
      queryClient.invalidateQueries("super-heroes");
    },
  });
};
