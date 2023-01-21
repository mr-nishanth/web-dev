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
    onSuccess: () => {
      // Invalidate the query , refetch the super-heroes data
      queryClient.invalidateQueries(["super-heroes"]);
    },
  });
};
