import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
// export const useSuperHeroesData = (onSuccess, onError) => {
export const useSuperHeroesData = () => {
  return useQuery(["super-heroes"], fetchSuperHeroes, {
    // onSuccess: onSuccess,
    // onError: onError,
    // select: (res) => {
    //   const superHeroNames = res.data.map((hero) => hero.name);
    //   console.log({ superHeroNames });
    //   return superHeroNames;
    // },
  });
};
