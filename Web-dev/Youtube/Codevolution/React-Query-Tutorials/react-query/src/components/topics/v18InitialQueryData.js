import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

/*
const fetchSuperHeroes = (heroID) => {
  return axios.get(`http://localhost:4000/superheroes/${heroID}`);
};
export const useSuperHeroByID = (heroID) => {
  return useQuery(["super-hero", heroID], () => fetchSuperHeroes(heroID), {});
};
*/
const fetchSuperHero = ({ queryKey }) => {
  // console.log({ queryKey });
  const heroID = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroID}`);
};
export const useSuperHeroByID = (heroID) => {
  // ["super-hero", heroID] -> queryKey

  const queryClient = useQueryClient();
  // queryClient instance has access to query cache , now access to set the initial data

  return useQuery(["super-hero", heroID], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroID));
      // ?.data?.find((hero) => hero.id === parseInt(heroID)); -> Get the data from cache
      console.log({ hero });

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};
